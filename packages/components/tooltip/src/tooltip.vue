<template>
    <div :class="ns.b()">
        <slot></slot>
        <div :class="[ns.e('content'), ns.is(placement, true), ns.is('light', light)]">
            {{ content }}
        </div>
    </div>
</template>

<script lang='ts' setup>
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { tooltipProps } from './tooltip'

    const ns = useNamespace('tooltip')
    defineProps(tooltipProps)

    defineOptions({
        name: 'BTooltip'
    })

</script>

<style scoped lang="scss">

</style>