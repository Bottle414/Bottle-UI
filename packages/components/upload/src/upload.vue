<template>
    <div :class="ns.b()">
        Upload
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'// 因为已经安装到了根目录，所以可以直接使用包名
    import { uploadProps } from './upload'

    const ns = useNamespace('upload')
    const props = defineProps(uploadProps)

    defineOptions({
        name: 'BUpload'
    })
</script>