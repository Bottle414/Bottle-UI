<template>
    <Example>
        <BUpload drag action="http://localhost:3000/upload">
            <BButton size="large" >Drag</BButton>
        </BUpload>
    </Example>
</template>

<script lang='ts' setup>
    import { BUpload, BButton } from '@bottle-ui/components'
</script>

<style scoped>
</style>