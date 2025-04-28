<template>
    <Example>
        <BUpload disabled action="http://localhost:3000/upload" v-slot="{ dragging }" showList listType="image">
            <BButton size="large">Disabled</BButton>
        </BUpload>
    </Example>
</template>

<script lang='ts' setup>
    import { BUpload, BButton } from '@bottle-ui/components'
</script>

<style scoped>
</style>