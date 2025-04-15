<template>
    <div :class="ns.b()">
        <BTreeNode
            v-for="node in flattenTree"
            :node="node"
            :key="node.key"
            :expanded="isExpand(node)"
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

    const createTree = (data: TreeOption[]):TreeNode[] => {
        const result: TreeNode[] = traversal(data, null)
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

    function toggleExpand(node: TreeNode){
        // 处理折叠展开
        const expandedKeys = expandedKeysSet.value
        if (expandedKeys.has(node.key)){// 展开的，折叠
            expandedKeys.delete(node.key)
        }else expandedKeys.add(node.key)
    }

    // 格式化数据
    watch(() => props.data, (data: TreeOption[]) => {
        tree.value = createTree(data)
        console.log(tree.value);
        console.log(flattenTree.value);
    },{ immediate: true })

    defineOptions({
        name: "BTree"
    })
</script>

<style scoped>
   
</style>