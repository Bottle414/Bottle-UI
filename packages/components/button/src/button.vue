<template>
    <button :class="[
        ns.b(),
        ns.m(type),
        ns.m(size),
        ns.is('circle', circle),
        ns.is('round', round),
        ns.is('disabled', disabled || loading),
        ns.is('toTop', toTop),
        ns.is('visible', toTop && visiable)
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
    import { ref, onMounted, onUnmounted } from 'vue'
    import { ReloadOutlined } from '@vicons/antd';

    const ns = useNamespace('button')
    const visiable = ref(false)

    const props = defineProps(buttonProps)
    const emits = defineEmits(buttonEmits)
    const target = ref<HTMLElement | Window | null>(null)

    function resolveTarget(): HTMLElement | Window | HTMLHtmlElement | null {
        if (props.target === 'window') {
            return window
        }else if (props.target === 'document'){
            return document.documentElement
        }
        return document.getElementById(props.target)
    }

    const onScroll = () => {
        if (!target.value) return
        const scrollTop =
            target.value instanceof Window
            ? window.scrollY
            : target.value instanceof Document
            ? document.documentElement.scrollTop
            : (target.value as HTMLElement).scrollTop
            // console.log(scrollTop) 去掉这一句就失效了 因为target不是响应式更新，在得到为null是不更新，导致状态一直无法切换 而打印以后触发了响应式更新
        visiable.value = scrollTop > 100
    }

    onMounted(() => {
        target.value = resolveTarget()
        if (!target.value) return
        target.value.addEventListener('scroll', onScroll)
    })

    onUnmounted(() => {// vue3不会自己卸载手动书写的事件监听器
        if (!target.value) return
        target.value.removeEventListener('scroll', onScroll)
    })

    // const visiable = computed(() => {
    //     console.log(window.scrollY)
    //     return window.scrollY > 100
    // }) computed不监听非响应式的全局属性

    const handleClick = (e: MouseEvent) => {
        if (!target.value) return
        if (props.toTop){
            target.value.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
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