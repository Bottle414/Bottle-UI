<template>
    <div
        :class="ns.b()"
    >
        <div :class="ns.e('background')" :style="{ height: height + 'px', width: width + 'px' }">
            <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                :aria-valuenow="percentage"
                :class="[
                    ns.e('bar'),
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
        <span :class="ns.e('text')">{{ percentage }}%</span>
    </div>
    
</template>

<script lang="ts" setup>
    import { progressProps } from './progress'
    import useNamespace from '@bottle-ui/hooks/useNamespace'

    const ns = useNamespace('progress')
    const props = defineProps(progressProps)

    defineOptions({ name: 'BProgress' })
</script>
