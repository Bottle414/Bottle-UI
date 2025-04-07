<template>
    <i :class="bem" :style="style">
        <slot></slot>
    </i>
</template>

<script lang='ts' setup>
    import useNamespace from '@bottle-ui/hooks/useNamespace'// 因为已经安装到了根目录，所以可以直接使用包名
    import { iconProps } from './icon';
    import { computed } from 'vue'
    
    const bem : string = useNamespace('icon').b()
    const props = defineProps(iconProps)
    defineOptions({
        name: "BIcon"
    })

    // 计算样式
    const style = computed(() => {
        const { color, depth, size} = props

        if (!color && !depth && !size) return
        return {
            ...(color ? { "color": color } : {}),// 展开对象
            ...(depth ? { "opacity": depth * 0.25} : {}),
            ...(size ? { "font-size": size + 'px'} : {})
        }
    })
</script>

<style scoped>
    .icon {
        
    }
</style>