<template>
    <button :class="[
        ns.b(),
        ns.m(type),
        ns.m(size),
        ns.is('circle', circle),
        ns.is('round', round),
        ns.is('disabled', disabled || loading)
        ]"
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
    import { ref, computed } from 'vue'
    import BIcon from '@bottle-ui/components/icon'
    import { ReloadOutlined } from '@vicons/antd';

    const ns = useNamespace('button')

    const props = defineProps(buttonProps)
    const emits = defineEmits(buttonEmits)

    const style = computed(() => {// computed 支持响应式
        return {
           
        }
    })

    const handleClick = (e: MouseEvent) => {
        emits('click', e)// 使自己触发是为了不在被外面包裹的时候触发 不推荐使用自带的事件
    }

    const handleMousedown =(e: MouseEvent) => {
        emits('mousedown', e)
    }


    defineOptions({
        name: 'BButton',
        inheritAttrs: false// 不要被奇怪的属性绑定
    })
    
</script>

<style scoped lang="scss">
    
</style>