/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Example>
        <BUpload multiple :limit="2" action="http://localhost:3000/upload">
            <BButton size="large">Limit 2</BButton>
        </BUpload>
    </Example>
</template>

<script lang='ts' setup>
</script>

<style scoped>
</style>