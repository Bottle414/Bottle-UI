<template>
    <Example>
        <BUpload multiple action="http://localhost:3000/upload" v-slot="{ dragging }" showList listType="image">
            <BButton size="large">Multiple Upload</BButton>
        </BUpload>
    </Example>
</template>

<script lang='ts' setup>
</script>

<style scoped>
</style>