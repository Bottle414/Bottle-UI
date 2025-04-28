<template>
    <div :class="[ns.b(), ns.is('disabled', disabled)]" @click="handleClick">
        <template v-if="drag">
            <UploadDragger @file="uploadFiles">
                <slot></slot>
            </UploadDragger>
        </template>
        <template v-else>
            <slot></slot>
            <input
                type="file"
                ref="input"
                :name="name"
                :accept="accept"
                :multiple="multiple"
                @change="handleChange"
                :disabled="disabled"
            />
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { ref, useTemplateRef } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace' // 因为已经安装到了根目录，所以可以直接使用包名
    import { UploadRawFile, getId } from './upload'
    import { uploadContentProps } from './upload-content'
    import { httpRequest } from './ajax'
    import UploadDragger from './upload-dragger.vue'

    const ns = useNamespace('upload-content')
    const props = defineProps(uploadContentProps)
    const inputRef = useTemplateRef<HTMLInputElement>('input')

    async function upload(file: UploadRawFile) {
        // 上传之前清空
        if (!inputRef.value) return
        inputRef.value.value = ''
        // 如果用户上传了同一张文件，再点一次「选择文件」，input 不会触发 change 事件，因为值没变。
        // 清空 input 就能确保即便选了相同文件也能触发 change，组件逻辑才能跑得通。
        // 所以很多组件库都会在上传完成后或选择文件后执行 input.value = ''。
        const result = await props.beforeUpload(file)
        console.log(result)
        if (result === false) return props.onRemove(file) // 停止上传 ?.表示在方法存在时才调用 不然返回undefine

        // 调用ajax 上传文件
        const { method, name, action, headers, data } = props
        httpRequest({
            method,
            name,
            file,
            action,
            headers,
            data,
            onProgress: e => {
                props.onProgress(e, file)
            },
            onSuccess: res => {
                props.onSuccess(res, file)
            },
            onError: e => {
                props.onError(e, file)
            }
        })
    }

    function uploadFiles(files: FileList){
        for (let i = 0; i < files.length; i++) {
            const rawFile = files![i] as UploadRawFile
            rawFile.uid = getId()
            props.onStart(rawFile) // 上传前的逻辑
            upload(rawFile)
        }
    }

    const handleChange = (e: Event) => {
        // 组件内事件处理函数最好用箭头函数保持this指向，工具函数内使用function
        const files = (e.target as HTMLInputElement).files
        if (!files) return
        uploadFiles(files)// 用户取消了上传，直接离开
    }

    const handleClick = () => {
        inputRef.value?.click() // 通过这种方式去调用display: none的input
    }

    defineOptions({
        name: 'BUploadContent'
    })
</script>
