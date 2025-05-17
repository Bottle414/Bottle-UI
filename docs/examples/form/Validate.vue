<template>
    <Example>
        <BForm ref="formRef"
            id="form"
            :model="state"
            :rules="{
                name: {
                    min: 2,
                    max: 3,
                    message: '用户名2 - 3位',
                    trigger: ['blur', 'change']
                },
                password: {
                    min: 1,
                    max: 3,
                    message: '密码1 - 3位',
                    trigger: ['blur', 'change']
                }
            }">
            <BFormItem prop="name" label="用户名"
                :rules="[
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }
                ]">
                <BInput
                    v-model="state.name"
                ></BInput>
            </BFormItem>
            <BFormItem prop="password" label="用户密码"
                :rules="[
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: ['blur', 'change']
                    }
                ]">
                <BInput
                    v-model="state.password"
                ></BInput>
            </BFormItem>
            <BButton @click="formValidate">Test</BButton>
        </BForm>
    </Example>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    // import { FormInstance } from '@bottle414/bottle-ui/components'
    const formRef = ref<any>()

    const state = ref({
        name: '',
        password: '7k7kkkk'
    })

    function formValidate(){
        const form = formRef.value
        form?.formValidate((valid, err) => {
            console.log(valid, err);
        })
    }
</script>

<style scoped>
    #form {
        display: grid;
        grid-template-columns: 1fr;
        place-self: center;
        align-items: center;
        gap: 20px;
    }
</style>