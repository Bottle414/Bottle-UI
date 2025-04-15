<template>
    <div :class="ns.b()">
        <BTreeNode
            v-for="node in flattenTree"
            :node="node"
            :key="node.key"
            :expanded="isExpand(node)"
            :loading="isLoading(node)"
            @toggle-expand="toggleExpand(node)"
        ></BTreeNode>
    </div>
</template>

<script lang='ts' setup>
    import useNamespace from '@bottle-ui/hooks/useNamespace'// 因为已经安装到了根目录，所以可以直接使用包名
    import { TreeNode, TreeOption, treeProps, TreeProps } from './tree';
    import { computed, ref, watch } from 'vue'
    import BTreeNode from './tree-node.vue'
    
    const ns = useNamespace('tree')

    const tree = ref<TreeNode[]>([])
    const props = defineProps(treeProps)

    // 默认展开的集合
    const expandedKeysSet = ref(new Set(props.defaultExpandedKeys))
    // 正在加载的集合
    const loadingKeysSet = ref(new Set())

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
                level: parent ? parent.level + 1 : 0,
                isLeaf: node.isLeaf ?? children.length == 0// 判断是否自带isLeaf, 没有就看孩子长度
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

    // 格式化数据
    watch(() => props.data, (data: TreeOption[]) => {
        tree.value = createTree(data, null)// 第一次，父节点为空
    },{ immediate: true })

    defineOptions({
        name: "BTree"
    })
</script>

<style scoped>
   
</style>