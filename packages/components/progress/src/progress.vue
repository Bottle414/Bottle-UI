/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <div
        :class="ns.b()"
    >
        <div v-if="type === 'line'" :class="ns.e('line-background')" :style="{ height: height + 'px', width: width + 'px' }">
            <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                :aria-valuenow="percentage"
                :class="[
                    ns.e('line'),
                    ns.is('success', status === 'success'),
                    ns.is('warning', status === 'warning'),
                    ns.is('error', status === 'error'),
                    ns.is('indeterminate', indeterminate)
                ]"
                :style="{
                    width: percentage + '%',
                    background: color,
                    height: '100%'
                }"
            ></div>
        </div>
        <div v-else-if="type === 'circle'">
            <svg :width="paint" :height="paint">
                <circle 
                    :class="ns.e('circle-background')"
                    :cx="center" 
                    :cy="center" 
                    :r="radius"
                    :stroke-width="circleWidth" />
                
                <!-- 进度圆环 -->
                <circle 
                    :class="[ns.e('circle'), ns.is('indeterminate', indeterminate)]"
                    :cx="center" 
                    :cy="center" 
                    :r="radius" 
                    :stroke="color"
                    :style="{ transformOrigin:  `${center}px ${center}px`}"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="offset"
                    :stroke-width="circleWidth" />
            </svg>
        </div>
        <div v-else-if="type === 'dashboard'">
            <svg :width="paint" :height="paint">
                <circle
                    :class="ns.e('dashboard-background')"
                    :cx="center" 
                    :cy="center" 
                    :r="radius"
                    :style="{ transformOrigin:  `${center}px ${center}px`}"
                    :stroke-dasharray="6.28 * radius"
                    :stroke-dashoffset="11 * radius"
                    :stroke-width="circleWidth" />
                
                <!-- 进度圆环 -->
                <circle
                    :class="[ns.e('dashboard'), ns.is('indeterminate', indeterminate)]"
                    :cx="center" 
                    :cy="center" 
                    :r="radius" 
                    :stroke="color"
                    :style="{ transformOrigin: `${center}px ${center}px`}"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="offset"
                    :stroke-width="circleWidth" />
            </svg>
        </div>
        <span :class="[ns.e('text'), ns.is(type, true)]">{{ percentage }}%</span>
    </div>
</template>

<script lang="ts" setup>
    import { progressProps } from './progress'
    import { computed } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { ref } from 'vue';

    const ns = useNamespace('progress')
    const props = defineProps(progressProps)
    const { circleWidth, radius } = props
    let percentage = ref(props.percentage)
    
    const paint = computed(() => {
        return radius * 2 + circleWidth * 2
    })

    const center = computed(() => {
        return radius + circleWidth
    })

    const circumference = computed(() => {
        if (props.type === 'dashboard') return 6.28 *  (270 / 360)  * radius
        else return  6.28 * radius
    })

    const offset = computed(() => {
        return circumference.value - (percentage.value / 100) * circumference.value
    })

    defineOptions({ name: 'BProgress' })
</script>
