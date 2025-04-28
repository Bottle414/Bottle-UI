<template>
    <Example>
        <BUpload action="http://localhost:3000/upload" listType="image">
            <BButton size="large">Upload</BButton>
        </BUpload>
        <BUpload action="http://localhost:3000/upload">
        </BUpload>
    </Example>
</template>

<script lang='ts' setup>
    import { BUpload, BButton } from '@bottle-ui/components'
</script>

<style scoped>
</style>