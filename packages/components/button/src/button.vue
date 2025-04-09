<template>
    <button :class="bem" :style="style">
        <template v-if="loading">
            <BIcon>
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
    import { buttonProps } from './button'
    import { ref, computed } from 'vue'
    import BIcon from '@bottle-ui/components/icon'
    import { ReloadOutlined } from '@vicons/antd';

    const bem = useNamespace('button').b()

    const props = defineProps(buttonProps)
    const { size, color, type, radius, loading } = props

    const style = computed(() => {// computed 支持响应式
        return {
            width: `${ +size * 10 }px`,// 把字符串转数字
            height: `${ +size * 8 }px`,
            background: color,
            color: '#333',
            type,
            'border-radius': `${ radius }%`,
            loading,
            border: 'none'
        }
    })


    defineOptions({
        name: 'button'
    })
    
</script>

<style scoped lang="scss">
    
</style>