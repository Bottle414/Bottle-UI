/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

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
</script>

<style scoped>
</style>