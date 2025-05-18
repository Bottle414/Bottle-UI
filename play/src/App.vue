<template>
    <BUpload multiple :before-upload="handleBeforeUpload" action="http://localhost:3000/upload" showList listType="image">
        <BButton size="large">Upload</BButton>
    </BUpload>
</template>

<script lang='ts' setup>
    import { BUpload, BButton } from '@bottle-ui/components'
    function handleBeforeUpload(){
        console.log('upload')
        return true
    }
</script>

<style scoped>
</style>