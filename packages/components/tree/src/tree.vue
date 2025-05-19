/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <!-- TODO: 传入virtual绑定component， 为true绑定virtual-list不然就是div --->
    <BVirtualList v-if="virtual" :items="flattenTree">
        <template #default="{ data }">
            <BTreeNode
                :node="data"
                :key="data.key"
                :expanded="isExpand(data)"
                :loading="isLoading(data)"
                :selected="isSelect(data)"
                :checkbox="props.checkbox"
                :checked="isChecked(data)"
                :disabled="isDisabled(data)"
                :indeterminate="isIndeterminate(data)"
                @toggle-expand="toggleExpand(data)"
                @handle-select="handleSelect(data)"
                @handle-check="handleCheck(data)"
            ></BTreeNode>
        </template>
    </BVirtualList>
    
    <div v-else :class="ns.b()">
        <BTreeNode
            v-for="node in flattenTree"
            :node="node"
            :key="node.key"
            :expanded="isExpand(node)"
            :loading="isLoading(node)"
            :selected="isSelect(node)"
            :checkbox="props.checkbox"
            :checked="isChecked(node)"
            :disabled="isDisabled(node)"
            :indeterminate="isIndeterminate(node)"
            @toggle-expand="toggleExpand(node)"
            @handle-select="handleSelect(node)"
            @handle-check="handleCheck(node)"
        ></BTreeNode>
    </div>
</template>

<script lang='ts' setup>
    import useNamespace from '@bottle-ui/hooks/useNamespace'// 因为已经安装到了根目录，所以可以直接使用包名
    import { treeEmits, TreeNode, TreeOption, treeProps, treeInjectKey, Key } from './tree';
    import { computed, onMounted, provide, ref, useSlots, watch } from 'vue'
    import BTreeNode from './tree-node.vue'
    import BVirtualList from '@bottle-ui/components/virtual-list'

    const tree = ref<TreeNode[]>([])
    const props = defineProps(treeProps)
    const virtual = props.virtual
    const ns = virtual ? useNamespace('virtual-tree') : useNamespace('tree')
    const emit = defineEmits(treeEmits)

    // 默认展开的集合
    const expandedKeysSet = ref(new Set(props.defaultExpandedKeys))
    // 正在加载的集合
    const loadingKeysSet = ref(new Set())
    // 选中的集合
    const selectedKeysRef = ref<Key[]>([])
    // 勾选的集合
    const checkedKeysSet = ref(new Set(props.defaultCheckedKeys))
    // 禁用的集合
    const disabledKeysSet = ref(new Set(props.disabledKeys))
    // 半选的集合
    const indeterminateKeysSet = ref (new Set(props.indeterminateKeys))

    // 得到格式化字段
    function createOptions(label: string, keyField: string, children: string){
        return {
            getKey(node: TreeOption){
                return node[keyField] as string
            },
            getLabel(node: TreeOption){
                return node[label] as string
            },
            getChildren(node: TreeOption){
                return node[children] as TreeOption[]
            }
        }
    }

    const treeOptions = createOptions(props.label, props.keyField, props.children)

    function traversal(data: TreeOption[], parent: TreeNode | null): TreeNode[]{
        return data.map(node => {
            const children = treeOptions.getChildren(node) || []
            const newNode: TreeNode = {
                label: treeOptions.getLabel(node),
                key: treeOptions.getKey(node),
                children: [],// 默认为空
                raw: node,
                disabled: node.disabled || false,// 看是否传入
                level: parent ? parent.level + 1 : 0,
                isLeaf: node.isLeaf ?? children.length == 0,// 判断是否自带isLeaf, 没有就看孩子长度
                parentKey: parent?.key// 父节点下标
            }
            if (children.length) newNode.children = traversal(children, newNode)

            return newNode
        })
    }

    const createTree = (data: TreeOption[], parent: TreeNode | null):TreeNode[] => {
        const result: TreeNode[] = traversal(data, parent)
        return result
    }

    // 把树拍平
    const flattenTree = computed(() => {
        let expandedKeys = expandedKeysSet.value// 要展开的节点
        let flattenNodes: TreeNode[] = []// 拍平后的数组

        const nodes = tree.value || []// 格式化后的节点

        const stack: TreeNode[] = []// 栈
        for (let i = nodes.length - 1; i >= 0; --i){// 先把第一层存入栈中
            stack.push(nodes[i])
        }

        while(stack.length){
            const node = stack.pop()// 出栈是倒着的，所以入栈的时候倒着遍历，这样出来就是顺的
            if (!node) continue
            flattenNodes.push(node)
            if (expandedKeys.has(node.key)){// 如果要展开
                const children = node.children
                if (children){// 把小孩再倒序回去
                    for (let i = node.children.length - 1; i >= 0; i--){
                        stack.push(node.children[i])// 一直拿孩子所以最后平了
                    }
                }
            }
        }
        return flattenNodes
    })

    function isExpand(node: TreeNode): boolean {
        return expandedKeysSet.value.has(node.key)
    }

    function isLoading(node: TreeNode): boolean {
        return loadingKeysSet.value.has(node.key)
    }

    function isSelect(node: TreeNode): boolean {// 只是更新时每个节点都触发了
        return selectedKeysRef.value.includes(node.key)
    }

    function isDisabled(node: TreeNode): boolean {
        return disabledKeysSet.value.has(node.key)
    }

    function isChecked(node: TreeNode): boolean {
        return checkedKeysSet.value.has(node.key)
    }

    function isIndeterminate(node: TreeNode): boolean {
        return indeterminateKeysSet.value.has(node.key)
    }

    function triggerLoading(node: TreeNode){
        // 不是叶子、提供懒加载方法才可以进行懒加载
        if (props.onLoad && !node.isLeaf ){
            let loadingKeys = loadingKeysSet.value
            if (!loadingKeys.has(node.key)){// 不在里面
                loadingKeys.add(node.key)
                props.onLoad(node.raw).then(children => {
                    node.raw.children = children// 更新原数据
                    node.children = createTree(children, node)// 更新格式化树
                    loadingKeys.delete(node.key)// 删除
                })// 调用 注意是原节点
            }
        }
    }

    function toggleExpand(node: TreeNode){
        if (loadingKeysSet.value.has(node.key)) return// 加载中禁用
        // 处理折叠展开
        const expandedKeys = expandedKeysSet.value
        if (expandedKeys.has(node.key)){// 展开的，折叠
            expandedKeys.delete(node.key)
        }else{// 展开
            triggerLoading(node)
            expandedKeys.add(node.key)
        } 
    }

    // 选中
    function handleSelect(node: TreeNode){
        if (node.disabled) return// 禁用
        let selectedKeys = Array.from(selectedKeysRef.value)
        if (props.multiple){
            const index = selectedKeys.findIndex(key => key == node.key)
            if (index > -1){// 找到了，删掉
                selectedKeys.splice(index, 1)
            }else {
                selectedKeys.push(node.key)
            }
        }else {// 单选
            if (selectedKeys.includes(node.key)){
                // 直接清空
                selectedKeys = []
            }else {
                selectedKeys = [node.key]// 只分配这一个
            }
        }
        // 触发外层事件
        emit("update:selectedKeys", selectedKeys)
    }

    // 更新选中
    function updateChecked(checked: boolean, node: TreeNode){
        const checkedKeys = checkedKeysSet.value
        if (checked){// 如果老登是true
            checkedKeys.add(node.key)
            indeterminateKeysSet.value.delete(node.key)
        }else {
            checkedKeys.delete(node.key)
        }
    }

    // 更新小孩, 自上而下
    function updateChildren(node: TreeNode, checked: boolean){
        if (isDisabled(node) || node.disabled) return
        // 更新小孩状态
        if (node.parentKey) updateChecked(checked, node)
        const children = node.children
        if (node.children){
            children.forEach((child) => {
                updateChildren(child, checked)
            })
        }
    }

    function findNode(nodeKey: Key): TreeNode | undefined {
        return flattenTree.value.find(node => nodeKey === node.key)// 返回自己
    }

    // 更新老登, 自下而上
    function updateParent(node: TreeNode){
        if (!node.parentKey) return// 无父结点
        const parent = findNode(node.parentKey) // 老登未找到
        if (!parent) return

        const allChecked = parent.children.every(child => isChecked(child))// 每个孩子都勾选了
        const someChecked = parent.children.some(child => isChecked(child) || isIndeterminate(child))// 有孩子被勾选或部分勾选了

        if (allChecked) {
            checkedKeysSet.value.add(parent.key)
            indeterminateKeysSet.value.delete(parent.key)
        }else if (someChecked){
            checkedKeysSet.value.delete(parent.key)
            indeterminateKeysSet.value.add(parent.key)
        }else {
            checkedKeysSet.value.delete(parent.key)
            indeterminateKeysSet.value.delete(parent.key)
        }
        // 接下来去往父节点
        updateParent(parent)
    }

    // 维护key列表
    function handleCheck(node: TreeNode){
        if (isDisabled(node) || node.disabled) return
        const checkedKeys = checkedKeysSet.value
        checkedKeys[isChecked(node) ? 'delete' : 'add'](node.key)// 老登和小孩是反的
        updateChildren(node, isChecked(node))// 传入更新后的值，防止默认值导致父子不同步
        updateParent(node)// 更新老登
    }

    onMounted(() => {
        checkedKeysSet.value.forEach(( key: Key ) => {
            const curNode = findNode(key)
            if (curNode){// 要是有当前节点
                updateParent(curNode)
            }
        })
    })

    // 格式化数据
    watch(() => props.data, (data: TreeOption[]) => {
        tree.value = createTree(data, null)// 第一次，父节点为空
    },{ immediate: true })

    // 触发选中的回调
    watch(() => props.selectedKeys, value => {
        if (value){
            selectedKeysRef.value = value
        }
    }, { immediate: true })

    provide(treeInjectKey, {// 就是把App传给tree再到tree-node的插槽全部传给tree-node
        slots: useSlots()
    })

    defineOptions({
        name: "BTree"
    })
</script>

<style scoped>
   
</style>