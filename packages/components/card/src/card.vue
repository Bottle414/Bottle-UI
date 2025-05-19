/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <div :class="[ns.b(), ns.is(`${ props.shadow }`, true)]">
        <div v-if="$slots.header" :class="ns.e('header')">
            <slot name="header"></slot>
        </div>
        <div :class="[ns.e('body'), bodyClass]" :bodyStyle="bodyStyle">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" :class="ns.e('footer')">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
    import { cardProps } from './card'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    
    const ns = useNamespace('card')
    const props = defineProps(cardProps)

    defineOptions({ name: 'BCard' })
</script>