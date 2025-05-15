<template>
    <Example>
        <BUpload action="http://localhost:3000/upload" listType="image">
            <template #icon>
                <BIcon color="coral" style="width: 50px; margin-left: 10px;">
                    Icon
                </BIcon>
            </template>
        </BUpload>
    </Example>
</template>

<script lang='ts' setup>
</script>

<style scoped>
</style>