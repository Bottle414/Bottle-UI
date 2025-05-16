<template>
    <div class='example'>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang='ts' setup>
    defineOptions({
        name: 'Example'
    })
</script>

<style scoped>
    .example {
        position: relative;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
    }

    .content {
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 30px;
        padding: 5%;
    }
</style>