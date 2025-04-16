<template>
    <div :class="ns.b()" ref="virtual-box" :onScroll="handlerScroll"><!-- 虚拟窗口 -->
        <div :class="ns.e('scroll-bar')" ref="scroll-bar"></div><!-- 滚动条 -->
        <div :class="ns.e('scroll-list')" :style="{ transform: `translateY(${offset + 'px'})`}">
            <slot v-for="(data, index) in visiableData" :key="index" :data="data"></slot>
        </div>
    </div>
</template>

<script lang='ts' setup>
    import { ref, computed, watch, useTemplateRef, nextTick } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { virtualListProps } from './virtual-list'

    const ns = useNamespace('virtual-list')
    const props = defineProps(virtualListProps)
    const virtualBox = useTemplateRef<HTMLElement>('virtual-box')// 最外面的盒子
    const scrollBar = useTemplateRef<HTMLElement>('scroll-bar')// 滚动条
    const state = ref({
        start: 0,
        end: props.remain
    })// 初始渲染数据

    const itemHeight = props.size || 20// 传了size就是size，不然就计算
    const offset = ref(0)// 偏移量

    nextTick(() => {// 组件加载完毕才能获得DOM
        virtualBox.value!.style.height = itemHeight * props.remain + 'px'
        scrollBar.value!.style.height = props.items.length * itemHeight + 'px'
    })

    const visiableData = computed(() => {
        return props.items.slice(state.value.start, state.value.end)// 切片
    })

    watch(props.items, () => {
        if (scrollBar.value){
            scrollBar.value!.style.height = props.items.length * itemHeight + 'px'
        }
    }, { immediate: true })// 总长度更新

    function handlerScroll(){// 计算位移
        const scrollTop = virtualBox.value?.scrollTop!
        state.value.start = Math.floor(scrollTop / itemHeight)
        state.value.end = state.value.start + props.remain
        offset.value = state.value.start * itemHeight
    }

    defineOptions({
        name: 'BVirtualList'
    })
</script>

<style scoped>
  
</style>