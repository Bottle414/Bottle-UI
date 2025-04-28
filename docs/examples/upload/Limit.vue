<template>
    <Example>
        <BUpload multiple :limit="2" action="http://localhost:3000/upload">
            <BButton size="large">Limit 2</BButton>
        </BUpload>
    </Example>
</template>

<script lang='ts' setup>
    import { BUpload, BButton } from '@bottle-ui/components'
</script>

<style scoped>
</style>