/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Example>
        <BInput
            v-model="inputValue"
            placeholder="please input..."
            clearable
        >
            <template #prefix>
                <BButton class="prefix">Prefix</BButton>
            </template>
            <template #suffix>
                <BIcon color="coral">
                    Suffix
                </BIcon>
            </template>
        </BInput>
    </Example>
    <Example>
        <BInput
            label="clearable"
            v-model="inputValue"
            placeholder="please input..."
            clearable
        >
        </BInput>
    </Example>
    <Example>
        <BInput
            type="password"
            label="password"
            v-model="inputValue"
            placeholder="please input..."
            show-password
        >
        </BInput>
    </Example>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    let inputValue = ref()
</script>

<style scoped>
    .prefix {
        height: 35px;
        transform: translateX(2px);
    }
</style>