<template>
    <div :class="ns.b()">
        <template v-for="node in tree" :key="node.id">
            <div class="node">{{ node.text }}</div>
        </template>
    </div>
    <!-- parent会导致序列化的时候循环引用而报错 -->
</template>

<script lang='ts' setup>
    import { ref, watch, computed } from 'vue';
    import { treeProps } from './tree'
    import { Node, TreeOption } from './tree'
    import useNamespace from '@bottle-ui/hooks/useNamespace'

    const ns = useNamespace('tree')

    const props = defineProps(treeProps)
    const { label, key, checked } = props// 解构出对应字段
    // 收到数据进行格式化
    const tree = ref<Node[]>([])// 拍平的树
    const expandedset = ref(new Set(checked))

    // 数据格式化
    const formatTree = (data: TreeOption[], parent: Node | null): Node[] => {
        return data.map(node => {
            const newNode = new Node(node)

            newNode.parent = parent
            newNode.level = parent ? parent.level + 1 : 0
            newNode.text = node[label] as string

            const children = node.children

            if (children?.length){
                newNode.children = formatTree(children, newNode)
            }else {
                newNode.isLeaf = true
            }
            return newNode
        })
    }

    const flattenTree = (root: Node): Node[] => {
        // 采用BFS拍平树
        let flatNodes: Node[] = []
        let queue: Node[] = [root]// 一边拍平一边格式化

        while (queue.length) {
            let node = queue.shift()
            if (!node) continue
            flatNodes.push(node)
            if (node.children) {
                queue.push(...node.children)
            }
        }

        return flatNodes
    }

    watch(() => props.data, (data: TreeOption[]) => {// 监视数据传入, 格式化数据
        const formatNodes = formatTree(data, null)
        tree.value = formatNodes.flatMap(node => flattenTree(node))// 考虑多个根节点
        console.log(tree.value);
    },{ immediate: true })

    defineOptions({
        name: 'BTree'
    })
</script>

<style scoped>
   
</style>