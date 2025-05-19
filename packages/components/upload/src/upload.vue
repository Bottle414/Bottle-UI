/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <div :class="[ns.b(), ns.is('disabled', disabled)]">
        <BUploadContent v-slot="dragging" v-bind="uploadContentProps" :disabled="disabled">
            <slot :dragging="dragging">
                <div :class="ns.e('default')">Upload</div>
            </slot>
        </BUploadContent>
    </div>
    <BUploadList
        v-if="showList"
        :file-list="uploadFiles"
        :list-type="listType"
        @remove="handleDelete"
    >
        <slot name="icon"></slot>
    </BUploadList>
    
</template>

<script lang="ts" setup>
    import { computed, ref, watch } from 'vue';
    import useNamespace from '@bottle-ui/hooks/useNamespace' // 因为已经安装到了根目录，所以可以直接使用包名
    import { UploadFile, UploadFiles, uploadProps, UploadRawFile } from './upload'
    import { UploadContentProps } from './upload-content'
    import BUploadContent from'./upload-content.vue'
    import BUploadList from './upload-list.vue'

    const ns = useNamespace('upload')
    const props = defineProps(uploadProps)
    const emit = defineEmits({})

    const uploadFiles = ref<UploadFiles>(props.fileList)
    const findFile = (rawFile: UploadRawFile) => {
        return uploadFiles.value.find(file => file.uid === rawFile.uid)
    }

    watch(uploadFiles, (newValue) => {// 监控文件变化
        emit('onUpdate:file-list', newValue)
    })

    function handleDelete(uid: number){
        console.log('removed!');
        // 调用弹窗
        uploadFiles.value = uploadFiles.value.filter(file => file.uid != uid)
    }

    const uploadContentProps = computed<UploadContentProps>(() => ({
        ...props,
        onStart: (rawFile) => {
            if (props.disabled) return
            if (props.limit && uploadFiles.value.length >= props.limit || !props.multiple && uploadFiles.value.length == 1){
                console.log('limited!')
                // 调用弹窗
                return
            }
            console.log('start');
            // 上传之前先格式化
            const uploadFile: UploadFile = {
                uid: rawFile.uid,
                name: rawFile.name,
                percentage: 0,
                raw: rawFile,
                size: rawFile.size,
                status: 'start'
            }
            uploadFile.url = URL.createObjectURL(rawFile)// 实现预览
            uploadFiles.value =[...uploadFiles.value, uploadFile]
            props.onChange(uploadFile)
        },
        onProgress: (event, rawFile) => {
            console.log('progress');
            const uploadFile = findFile(rawFile)// 当前正在上传的文件
            if (!uploadFile) return
            uploadFile.status = 'progress'
            uploadFile.percentage = event.percentage
            props.onProgress(event, uploadFile, uploadFiles.value)
        },
        onRemove: async(rawFile) => {
            console.log('remove');
            const uploadFile = findFile(rawFile)
            if (!uploadFile) return
            uploadFile.status = 'remove'
            const res = await props.beforeRemove(uploadFile, uploadFiles.value)
            if (res === true){
                const fileList = uploadFiles.value
                fileList.splice(fileList.indexOf(uploadFile), 1)// 删掉
                props.onRemove(uploadFile, uploadFiles.value)
            }
        },
        onSuccess: (response, rawFile) => {
            console.log('success');
            const uploadFile = findFile(rawFile)
            if (!uploadFile) return
            uploadFile.status = 'success'
            const fileList = uploadFiles.value
            props.onSuccess(response, uploadFile, fileList)
        },
        onError: (error, rawFile) => {
            console.log('error');
            const uploadFile = findFile(rawFile)
            if (!uploadFile) return
            uploadFile.status = 'error'
            const fileList = uploadFiles.value
            fileList.splice(fileList.indexOf(uploadFile), 1)// 删掉
            props.onError(error, uploadFile, uploadFiles.value)
        }
    }))

    defineOptions({
        name: 'BUpload'
    })
</script>
