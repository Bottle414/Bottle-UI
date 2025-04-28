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
        <pre>
            <slot name="code">
                还在施工中...
            </slot>
        </pre>
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
        max-height: 0;
        /*  bottom: -20%;/* 相对于父级的位置 */
        /* left: 0; */
        background: #eee;
        transition: max-height 1s;
        overflow: hidden;
    }

    .pulldown-active {
        max-height: 800px;
    }
</style>