/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <button :class="[ns.e('board'), ns.is('open', open)]" @click="handleCollapse">
        <slot name="title">
            collapse
        </slot>
        <div :class="ns.e('icon')">
            <slot name="icon">
                <span :class="[ns.e('icon'), ns.is('open', open)]">◿</span>
            </slot>
        </div>
    </button>
    <div :class="[ns.e('panel'), ns.is('open', open)]">
        <slot></slot>
    </div>
</template>

<script lang='ts' setup>
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { ref } from 'vue'
    const ns = useNamespace('collapse')
    let open = ref(false)

    function handleCollapse(){
        open.value = !open.value
    }

    defineOptions({
        name: 'BCollapse'
    })
</script>

<style scoped>
</style>