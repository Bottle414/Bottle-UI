<template>
    <div :class="ns.b()" ref="window" @scroll="handleScroll">
        <div :class="ns.e('scroll')" ref="scroll" :style="{ height: listHeight + 'px' }"></div>
        <div :class="ns.e('list')" :style="{ transform: `translateY(${ offset }px)` }">
            <div :class="ns.e('item')" ref="items" v-for="(item, index) in visibleData" :key="index" :style="{ height: size + 'px', lineHeight: size + 'px'}">
                <slot :item="item">
                    {{ item }}
                </slot>
            </div>
        </div>
        
    </div>
</template>

<script lang='ts' setup>
    import { ref, useTemplateRef, computed, onMounted, onUpdated, toRefs } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { virtualListProps, Position } from './virtual-list'

    const ns = useNamespace('virtual-list')
    const props = defineProps(virtualListProps)
const { items, size, height, bufferScale } = toRefs(props)

    const windowRef = useTemplateRef<HTMLElement>('window')
    const itemsRef = useTemplateRef<HTMLElement[]>('items')
    const positions = ref<Position[]>([])// 每一项的高度和位置
    
    const scrollTop = ref(0)
    const pre = computed(() => Math.min(start.value, bufferScale.value * visibleCount.value))// 前置渲染数据
    const suff = computed(() => Math.min(items.value.length - end.value, bufferScale.value * visibleCount.value))
    const listHeight = computed(() => positions.value[positions.value.length - 1]?.bottom)// 列表总高度 固定：items.length * size，动态：最后一项的底部
    const visibleCount = computed(() => Math.ceil(height.value / size.value))// 可见元素个数
    const start = computed(() => binarySearch(scrollTop.value))// 固定：Math.floor(Math.max(0, scrollTop.value / size))，不固定：使用缓存
    const end = computed(() => start.value + visibleCount.value)
    const visibleData = computed(() => items.value.slice(start.value - pre.value, end.value + suff.value))// 可见数据
    const offset = computed(() => start.value > 0  ? positions.value[start.value - 1]?.bottom : 0)// 偏移量 固定：scrollTop.value - (scrollTop.value % size) 不固定：缓存

    function handleScroll(){
        if (!windowRef.value) return
        scrollTop.value = windowRef.value.scrollTop// 更新顶部距离
    }

    function binarySearch( val: number){
        let low = 0;
        let high = positions.value.length - 1;
        let tempIndex: number | null = null; // 用于存储找到的第一个大于或等于 val 的索引

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let midValue = positions.value[mid].bottom;

            if (midValue === val) {
                return mid + 1;
            } else if (midValue < val) {
                low = mid + 1;
            } else {
                // 找到一个大于 val 的项
                if (tempIndex === null || tempIndex > mid) {
                    tempIndex = mid;
                }
                high = mid - 1;
            }
        }
        return tempIndex === null ? 0 : tempIndex; // 如果没找到，默认返回 0
    }

    onMounted(() => {
        // 初始化每个列表项预估高度
        positions.value = items.value.map((item, index) => ({
                top: index * size.value,
                bottom: (index + 1) * size.value,
                height: size.value
            })
        )
    })

    onUpdated(() => {
        // 更新列表高度
        if (!itemsRef.value) return
        itemsRef.value.forEach(item => {
            const rect = item.getBoundingClientRect()
            const rectHeight = rect.height
            const index = +item.id.slice(1)
            const oldHeight = positions.value[index].height
            const diff = oldHeight - rectHeight

            if (diff){// 存在差值
                positions.value[index].bottom -= diff
                positions.value[index].height = rectHeight

                for (let i = index + 1; i < positions.value.length; i++){
                    positions.value[i].top = positions.value[i - 1].bottom
                    positions.value[i].bottom = positions.value[i].bottom - diff
                }
            }
        })
    })

    defineOptions({
        name: 'BVirtualList'
    })
</script>

<style scoped>
</style>