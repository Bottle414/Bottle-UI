<template>
    <!-- 缩进也可以改成计算属性 -->
    <div :class="ns.b()">
        <BNode
            v-for="node in visibleTree"
            :key="node.id"
            :node="node"
            @toggleExpand="toggleExpand"
            :style="{paddingLeft: node.level * props.indent + 'px'}
        "/>
    </div>
</template>
  
<script lang="ts" setup>
    import { ref, watch, computed } from 'vue'
    import { treeProps } from './tree'
    import { Node, TreeOption } from './tree'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import BNode from './tree-node.vue'

    const props = defineProps(treeProps)
    const ns = useNamespace('tree')

    const formatNodes = ref<Node[]>([]) // 嵌套结构
    const tree = computed(() => {// Node发生修改时触发更新
        return formatNodes.value.flatMap(node => flattenTree(node))
    })

    // 用于记录展开状态
    const toggleExpand = async(node: Node) => {
        node.expanded = !node.expanded
        // 只在第一次展开且没加载时触发加载
        if (node.expanded && !node.loaded) {
            node.isLoading = true
            node.loaded = true
            const children = await props.onLoad?.(node) // 外部传入的加载方法
            console.log('receive: ' + children);
            if (children && children.length) {
                node.children = formatTree(children, node)
            } else {
                node.isLeaf = true
            }
            node.isLoading = false
            // 更新整个树结构
            formatNodes.value = [...formatNodes.value]
        }
    }

    // 仅渲染可见节点
    const visibleTree = computed(() => {
        const result: Node[] = []

        const parentExpanded = (node: Node): boolean => {
            if (!node.parent) return true
            return node.parent.expanded && parentExpanded(node.parent)
        }

        for (const node of tree.value) {
            if (parentExpanded(node)) {
                result.push(node)
            }
        }

        return result
    })

    // 格式化数据
    const formatTree = (data: TreeOption[], parent: Node | null): Node[] => {
        return data.map(item => {
            const newNode = new Node(item)
            newNode.parent = parent
            newNode.level = parent ? parent.level + 1 : 0
            newNode.text = item[props.label] as string

            if (item.children?.length) {
                newNode.children = formatTree(item.children, newNode)
            } else {
                newNode.isLeaf = true
            }

            return newNode
        })
    }

    // 拍平成数组（BFS）
    const flattenTree = (root: Node): Node[] => {
        const result: Node[] = []
        const queue: Node[] = [root]

        while (queue.length) {
            const current = queue.shift()
            if (!current) continue
            result.push(current)
            if (current.children) {
                queue.push(...current.children)
            }
        }

        return result
    }

    // 监听 props.data 的变化 → 更新格式化树
    watch(() => props.data, (data: TreeOption[]) => {
        formatNodes.value = formatTree(data, null)
    }, { immediate: true })

    defineOptions({ name: 'BTree' })
</script>