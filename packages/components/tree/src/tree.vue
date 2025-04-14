<template>
    <!-- 缩进也可以改成计算属性 -->
    <div :class="ns.b()">
        <BNode
            v-for="node in visibleTree"
            :key="node.key"
            :node="node"
            @toggleExpand="toggleExpand"
            @check="onCheck"
            :style="{paddingLeft: node.level * props.indent + 'px'}
        "/>
        <!-- 不需要也不推荐在这里做事件委托, 这是纯DOM的, Vue已经做了优化, 委托反而破化了组件的封装性 -->
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

    const { disabledKeys } = props

    const formatNodes = ref<Node[]>([]) // 嵌套结构
    const tree = computed(() => {// Node发生修改时触发更新
        return formatNodes.value.flatMap(node => flattenTree(node))
    })

    // 返回展开的数据 保存 UI 状态、缓存、权限、日志分析等场景
    const getExpandedKeys = computed(() => {
        return tree.value.filter(node => node.expanded)// .map(node => node.key)
    })

    // 返回选中的数据
    const getCheckedKeys = computed(() => {
        return tree.value.filter(node => node.full)// .map(node => node.key)
    })

    // 返回拍平的整棵树
    const getFlattenTree = computed(() => {
        return tree.value
    })

    // 返回格式化的树
    const getFormatTree = computed(() => {
        return formatNodes.value
    })

    // 级联勾选
    const setChildrenCheck = (node: Node) => {
        if (!props.checkStrictly){
            node.full = true
            node.indeterminate = false
            node.children?.forEach(child => setChildrenCheck(child))
        }
    }

    // 同步父节点
    const updateParent = (node: Node | null) => {
        if (!node || !node.children.length) return

        const allChecked = node.children.every(child => child.full)
        const noneChecked = node.children.every(child => !child.full && !child.indeterminate)

        if (allChecked) {
            node.full = true
            node.indeterminate = false
        } else if (noneChecked) {
            node.full = false
            node.indeterminate = false
        } else {
            node.full = false
            node.indeterminate = true
        }

        updateParent(node.parent)
    }

    // 处理勾选
    const onCheck = (node: Node) => {
        if (node.disabled) return
        node.full = !node.full
        setChildrenCheck(node)
        updateParent(node.parent)
    }


    // 用于记录展开状态
    const toggleExpand = async(node: Node) => {
        node.expanded = !node.expanded
        // 父组件级联勾选
        setChildrenCheck(node)
        updateParent(node.parent)
        // 只在第一次展开且没加载时触发加载
        if (node.expanded && !node.loaded) {
            node.isLoading = true
            node.loaded = true
            const children = await props.onLoad?.(node) // 外部传入的加载方法
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
            newNode.key = item[props.key] as number
            if (disabledKeys.length) newNode.disabled = disabledKeys.includes(item.key)// 批量禁用
            // if (parent) newNode.loaded = true// 获取的子节点默认加载完毕
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

<style>
    /* 过渡动画 */
    .tree-expand-enter-active,
    .tree-expand-leave-active {
        transition: all 0.3s ease;
        overflow: hidden;
    }
    .tree-expand-enter-from,
    .tree-expand-leave-to {
        height: 0;
        opacity: 0;
    }
    .tree-expand-enter-to,
    .tree-expand-leave-from {
        height: auto;
        opacity: 1;
    }

</style>