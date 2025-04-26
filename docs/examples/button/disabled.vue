<template>
    <Example>
        <BButton type='success' disabled>Success</BButton>
        <BButton type='success' round disabled>Success</BButton>
        <BButton type='success' circle disabled>Success</BButton>
        <template #text>
            没有插进去啊
            算了
        </template>
    </Example>
</template>

<script lang='ts' setup>
    import { BButton } from '@bottle-ui/components'
</script>

<style scoped>
   
</style>