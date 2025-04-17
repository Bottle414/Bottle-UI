<template>
    <div :class="ns.b()">
        <div :class="[ns.e('content'), ns.is('selected', selected)]">
            <ExpandIcon v-if="!node.isLeaf" :class="[ns.e('expand-icon'), { expanded }]"  @click.prevent="handlerExpand"></ExpandIcon><!-- 三角展开图标, 叶子不展示 -->
            <BCheckbox v-if="props.checkbox"
                @change="handlerSelect"
                :checked="selected"
                :disabled="(node.disabled as boolean) || props.disabled"
                :style="{paddingLeft: node.level * 20 + 'px'}"
                :indeterminate="props.indeterminate"
                :model-value="props.checked"
            ></BCheckbox><!-- 后续在这里设置选中 -->
            {{ node.label }}
            <BTreeNodeContent :node="node"></BTreeNodeContent>
            <LoadingIcon v-if="loading" :class="[ns.e('loading-icon'), { loading }]"></LoadingIcon>
        </div>
        <!-- 也许以后可以支持自定义图标 -->
    </div>
</template>

<script lang='ts' setup>
    import { treeNodeProps, treeNodeEmits } from './tree-node'
    import BTreeNodeContent from './tree-node-content'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import BCheckbox from '@bottle-ui/components/checkbox';
    import ExpandIcon from './expandIcon'
    import LoadingIcon from './loadingIcon'

    const props = defineProps(treeNodeProps)
    const node = props.node!// Vue 的 required: true 是运行时校验，TypeScript 不会自动根据它把类型改成非 undefined, 必须加一定存在的断言，也就是!
    const ns = useNamespace('tree-node')

    const emit = defineEmits(treeNodeEmits)

    function handlerExpand(){
        emit('toggleExpand', node)
    }

    function handlerSelect(){
        emit('handleSelect', node)
        emit("handleCheck", node)
    }

    defineOptions({
        name: 'BTreeNode'
    })
    
</script>

<style scoped>
    
</style>