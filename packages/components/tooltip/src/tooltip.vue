<template>
    <div :class="ns.b()">
        <slot></slot>
        <div class="b-tooltip-content">
            {{ content }}
        </div>
    </div>
</template>

<script lang='ts' setup>
    import { ref, computed } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { tooltipProps } from './tooltip'

    const ns = useNamespace('tooltip')
    const props = defineProps(tooltipProps)
    const { color, depth, size, placement, content, background } = props

    const style = computed(() => {
        return {
            color,
            opacity: depth ? depth * 0.25 : 1,
            width: size + 'px',
        }
    })

    defineOptions({
        name: 'BTooltip'
    })

</script>

<style scoped lang="scss">
    .b-tooltip {
        position: relative;
        display: inline-block;
    }

    .b-tooltip:hover {/* 设置三角方向 */
        .b-tooltip-content {
            opacity: 1;
            pointer-events: none;
            /* 按理来说，文字颜色应该基于背景动态计算 */
        }
    }

    .b-tooltip-content {
        display: flex;
        padding: 2px 5px;/* 这些都需要动态计算 */
        position: absolute;
        align-items: center;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        background-color: v-bind( background );
        opacity: 0;
        transition: opacity .5s;
    }

    .b-tooltip-content::after {
        content: '';
        position: absolute;
        bottom: 100%;/* 底部对准边框 */
        left: 50%;/* 箭头居中, 这里使用函数设置方向 */
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-bottom-color: #333;/* 画到底部，得到箭头方向向上 */
        transition: inherit;/* 使箭头与工具文本同时出现和消失 */
    }
</style>