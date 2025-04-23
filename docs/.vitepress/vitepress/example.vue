<template>
    <div class='example'>
        <div class="content">
            <slot></slot>
        </div>
        <div class="foot">
            <sapn>Copy</sapn>
            <span>Code</span>
        </div>
    </div>
</template>

<script lang='ts' setup>
    defineOptions({
        name: 'example'
    })
</script>

<style scoped>
    .example {
        display: flex;
        flex-direction: column;
        border: 1px solid #ddd;
        border-radius: 10px;
    }

    .content {
        padding: 5%;
    }

    .foot {
        padding: 2%;
        display: flex;
        gap: 5%;
        justify-content: right;
    }
</style>