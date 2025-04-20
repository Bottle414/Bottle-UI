<template>
    <button :class="[
        ns.b(),
        ns.m(type),
        ns.m(size),
        ns.is('circle', circle),
        ns.is('round', round),
        ns.is('disabled', disabled || loading)
        ]"
        v-bind="$attrs"
        :type="nativeType"
        :disabled="disabled || loading"
        @click="handleClick"
        @mousedown="handleMousedown"
    >
    <!-- 通过修饰符改变button样式 这两种状态都可以触发禁用 样式与行为不是对应的 -->
        <slot></slot><!-- 默认插入位置 -->
        <template v-if="loading">
            <BIcon :class="ns.is('loading', loading)">
                <ReloadOutlined/>
            </BIcon>
        </template>
        <template v-else>
            <slot name="icon"></slot>
        </template>
    </button>
</template>

<script lang='ts' setup>
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { buttonEmits, buttonProps } from './button'
    import BIcon from '@bottle-ui/components/icon'
    import { ReloadOutlined } from '@vicons/antd';

    const ns = useNamespace('button')

    defineProps(buttonProps)
    const emits = defineEmits(buttonEmits)

    const handleClick = (e: MouseEvent) => {
        emits('click', e)// 使自己触发是为了不在被外面包裹的时候触发 不推荐使用自带的事件
    }

    const handleMousedown =(e: MouseEvent) => {
        emits('mousedown', e)
    }


    defineOptions({
        name: 'BButton',
        inheritAttrs: false// 不要被奇怪的属性绑定
        /*
            默认这些 $attrs 会自动加到最外层 DOM 元素上；
            但是当你用的是 <script setup> 或 inheritAttrs: false 的时候，就必须手动写 v-bind="$attrs" 才会传下去。
        */
    })
    
</script>

<style scoped lang="scss">
    
</style>