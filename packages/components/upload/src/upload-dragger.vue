<template>
    <div :class="[ns.b()]"
        @dragover.prevent="onDragover"
        @dragleave.prevent="onDragleave"
        @drop.prevent="onDrop"
    >
        <slot :dragging="dragging"></slot>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'

    const ns = useNamespace('upload-dragger')

    const dragging = ref(false)// 正在拖拽
    const emit = defineEmits({})

    function onDragover(){
        dragging.value = true
    }

    function onDragleave(){
        dragging.value = false
    }

    function onDrop(e: DragEvent){
        e.stopPropagation()
        dragging.value = false
        if (!e.dataTransfer) return
        emit('file', Array.from(e.dataTransfer.files))
        console.log(e.dataTransfer?.files);
    }
</script>