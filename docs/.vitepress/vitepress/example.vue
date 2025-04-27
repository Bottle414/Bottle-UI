<template>
    <div class='example' :class="{ 'example-active' : pull}">
        <div class="content">
            <slot></slot>
        </div>
        <div class="foot">
            <sapn title="复制代码">Copy</sapn>
            <span title="查看源代码" @click="handlePull">Code</span>
        </div>
    </div>
    <div class="pulldown" :class="{ 'pulldown-active' : pull}">
        <slot name="text">
            等待更新
        </slot>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    let pull = ref(false)

    function handlePull(){
        pull.value = !pull.value
    }

    defineOptions({
        name: 'example'
    })
</script>

<style scoped>
    .example {
        position: relative;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow: hidden;
    }

    .example-active {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .content {
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 30px;
        padding: 5%;
    }

    .foot {
        padding: 2%;
        display: flex;
        gap: 5%;
        justify-content: right;
        border-top: 1px solid #ddd;
        font-size: 14px;
    }

    .pulldown {
        width: 100%;
        position: relative;
        /*  bottom: -20%;/* 相对于父级的位置 */
        /* left: 0; */
        top: 0px;
        background: #eee;
        transform: scaleY(0);
        transform-origin: top;
        transition: transform .3s;
        overflow: hidden;
    }

    .pulldown-active {
        transform: scaleY(1);
    }
</style>