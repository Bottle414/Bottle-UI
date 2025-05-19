/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Example>
        <BUpload disabled action="http://localhost:3000/upload" v-slot="{ dragging }" showList listType="image">
            <BButton size="large">Disabled</BButton>
        </BUpload>
    </Example>
</template>

<script lang='ts' setup>
</script>

<style scoped>
</style>