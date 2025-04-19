<template>
    <div :class="[ns.b()]">
        
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import useNamespace from '@bottle-ui/hooks/useNamespace' // 因为已经安装到了根目录，所以可以直接使用包名
    import { uploadProps } from './upload'
    import { UploadContentProps } from './upload-content'

    const ns = useNamespace('upload')
    const props = defineProps(uploadProps)

    const uploadContentProps = computed<UploadContentProps>(() => ({
        ...props,
        onStart: (rawFile) => {},
        onProgress: (event) => {},
        onRemove: (rawFile) => {},
        onSuccess: (response) => {},
        onError: (error) => {},
    }))

    defineOptions({
        name: 'BUpload'
    })
</script>
