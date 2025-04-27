<template>
    <Example>
        <BCard>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
            <li>List Item 4</li>
        </BCard>
    </Example>
</template>

<script lang='ts' setup>
    import { BCard } from '@bottle-ui/components'
</script>

<style scoped>
    li {
        list-style: none;
    }
</style>