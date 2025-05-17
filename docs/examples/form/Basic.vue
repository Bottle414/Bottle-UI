<template>
        <BForm
            ref="formRef"
            :model="state"
        >
            <BFormItem prop="name" label="用户名">
                <BInput
                    v-model="state.name"
                    @blur="handleBlur"
                    @focus="handleFocus"
                ></BInput>
            </BFormItem>
            <BFormItem prop="password" label="用户密码">
                <BInput
                    v-model="state.password"
                    @blur="handleBlur"
                    @focus="handleFocus"
                ></BInput>
            </BFormItem>
            <BButton @click="">Test</BButton>
        </BForm>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    // import { FormInstance } from '@bottle414/bottle-ui/components'
    const formRef = ref<any>()

    const state = ref({
        name: '',
        password: '7k7kkkk'
    })

    function handleBlur(){

    }

    function handleFocus(){

    }
</script>

<style scoped>
</style>