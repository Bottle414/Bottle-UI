<template>
    <div :class="ns.b()" ref="virtual-box" :onScroll="handlerScroll"><!-- 虚拟窗口 -->
        <div :class="ns.e('scroll-bar')" ref="scroll-bar"></div><!-- 滚动条 -->
        <div :class="ns.e('scroll-list')" :style="{ transform: `translateY(${offset + 'px'})`}">
            <template v-for="(data, index) in visiableData" :key="index">
                <div :class="ns.e('item')" ref="item">
                  <slot :data="data" :index="index" />
                </div>
            </template>
        </div>
    </div>
</template>

<script lang='ts' setup>
    import { ref, computed, watch, useTemplateRef, nextTick, onMounted } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { virtualListProps } from './virtual-list'

    const ns = useNamespace('virtual-list')
    const props = defineProps(virtualListProps)
    const virtualBox = useTemplateRef<HTMLElement>('virtual-box')// 最外面的盒子
    const scrollBar = useTemplateRef<HTMLElement>('scroll-bar')// 滚动条
    const item = useTemplateRef<HTMLElement>('item')
    const state = ref({
        start: 0,
        end: props.remain
    })// 初始渲染数据

    const itemHeight = ref<number>(props.size || 1)// 传了size就是size，不然就计算
    const offset = ref(0)// 偏移量

    onMounted(() => {
        nextTick(() => {
            if (!virtualBox.value || !scrollBar.value || !item.value) return

            // 如果没传 size，就用 item 的真实高度
            if (!props.size) {
            const height = parseFloat(getComputedStyle(item.value).height)
            if (height > 0) {
                itemHeight.value = height
            }
            }

            virtualBox.value.style.height = itemHeight.value * props.remain + 'px'
            scrollBar.value.style.height = props.items.length * itemHeight.value + 'px'
        })
    })


    const prev = computed(() => {
        return Math.min(state.value.start, props.remain)
    })

    const next = computed(() => {
        return Math.min(props.remain, props.items.length - state.value.end)
    })

    const visiableData = computed(() => {
        return props.items.slice(state.value.start, state.value.end)// 切片 可以预留 pre 和 next
    })

    watch(props.items, () => {
        if (scrollBar.value){
            scrollBar.value.style.height = props.items.length * itemHeight.value + 'px'
        }
    }, { immediate: true })// 总长度更新

    function handlerScroll(){// 计算位移
        if (!virtualBox.value) return
        const scrollTop = virtualBox.value?.scrollTop
        state.value.start = Math.floor(scrollTop / itemHeight.value)
        state.value.end = state.value.start + props.remain
        offset.value = state.value.start * itemHeight.value// - itemHeight * prev.value
    }

    defineSlots<{
        default(props: any): any
    }>()

    defineOptions({
        name: 'BVirtualList'
    })
</script>

<style scoped>
  
</style>