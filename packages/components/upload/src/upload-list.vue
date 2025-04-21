<template>
    <div :class="ns.b()">
        <li
            :class="ns.e('item')"
            v-for="(file, index) in fileList"
            :key="file.uid || file.name"
        >
            <div :class="ns.e('detail')">
                <slot :file="file" :index="index">
                    <slot name="icon"></slot>
                    <img
                        :class="ns.e('file-image')"
                        v-if="listType === 'image'"
                        :src="file.url || ''"
                        alt="上传文件缩略图"
                    />
                </slot>
                <span :class="ns.e('file-size')">{{ file.size }}bit</span>
            </div>
            <BIcon :class="ns.e('delete-icon')">x</BIcon>
        </li>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { uploadListProps } from './upload-list'
    import BIcon from '@bottle-ui/components/icon';

    const ns = useNamespace('upload-list')
    const props = defineProps(uploadListProps)

    defineOptions({
        name: 'BUploadList'
    })
</script>

<style scoped></style>
