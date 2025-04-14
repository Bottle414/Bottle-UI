<template>
    <div :class="ns.b()">
        <div :class="ns.e('content')">
            <BCheckbox
                color="blue"
                @change="handlerExpand"
                :checked="node.full"
                :disabled="node.disabled"
            />
            <span v-if="props.node.isLoading">*</span>
            <span>{{ props.node?.text }}</span>
        </div>
    </div>
</template>
<!-- parent会导致序列化的时候循环引用而报错 -->

<script lang='ts' setup>
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { treeNodeProps, treeNodeEmits } from './tree-node'
    import BCheckbox from '@bottle-ui/components/checkbox'

    const ns = useNamespace('node')

    const props = defineProps(treeNodeProps)
    const emits = defineEmits(treeNodeEmits)// 拿到父组件传来的事件

    const handlerExpand = () => {
        // console.log('nodeclick : ');
        emits('toggleExpand', props.node)
    }
    defineOptions({
        name: 'BNode'
    })
</script>

<style scoped>

</style>