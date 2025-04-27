<template>
    <Example>
        <BTooltip content="button!">
            <BButton>Hover me!</BButton>
        </BTooltip>
        <BTooltip content="Icon!">
            <BIcon color="coral">Icon</BIcon>
        </BTooltip>
    </Example>
</template>

<script lang='ts' setup>
    import { BButton, BIcon, BTooltip } from '@bottle-ui/components'
</script>

<style scoped>
</style>