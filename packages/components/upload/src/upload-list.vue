<template>
    <div :class="ns.b()">
        <li
            :class="ns.e('item')"
            v-for="(file, index) in fileList"
            :key="file.uid || file.name"
        >
            <div :class="ns.e('detail')">
                <slot :file="file" :index="index">
                        <slot name="icon">
                            <span style="padding: 0 10px;" v-if="listType === 'text'"> ☰ </span>
                        </slot>
                    <img
                        :class="ns.e('file-image')"
                        v-if="listType === 'image'"
                        :src="file.url || ''"
                        alt="上传文件缩略图"
                    />
                    {{ file.name }}
                </slot>
                <span :class="ns.e('file-size')">{{ file.size }}bit</span>
            </div>
            <BIcon :class="ns.e('delete-icon')" @click="handleDelete(file.uid)">x</BIcon>
        </li>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { uploadListProps, uploadListEmits } from './upload-list'
    import BIcon from '@bottle-ui/components/icon';

    const ns = useNamespace('upload-list')
    const props = defineProps(uploadListProps)
    const emits = defineEmits(uploadListEmits)

    function handleDelete(uid: number){
        // 把按到的文件过滤掉
        console.log('click', uid, props.fileList);
        // 过滤
        emits('remove', uid)
    }

    defineOptions({
        name: 'BUploadList'
    })
</script>

<style scoped></style>
