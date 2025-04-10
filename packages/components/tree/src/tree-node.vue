<template>
    <div :class="ns.b()">
        <div :class="ns.e('content')">
            <span :class="[ns.e('expand-icon')]"> X </span>
            <span>{{ props.node?.text }}</span>
        </div>
    </div>
</template>
<!-- parent会导致序列化的时候循环引用而报错 -->

<script lang='ts' setup>
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { treeNodeProps } from './tree-node'

    const ns = useNamespace('node')

    const props = defineProps(treeNodeProps)
    defineOptions({
        name: 'BNode'
    })
</script>

<style scoped>

</style>