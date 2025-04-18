<template>
    <form :class="ns.b()">
        <slot></slot>
    </form>
</template>

<script lang='ts' setup>
    import { provide } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { formContextKey, formProps, FormContext } from './form'
    import { FormItemContext } from './form-item'
    import type { Values } from 'async-validator'

    const ns = useNamespace('form')
    const props = defineProps(formProps)

    // 在这里调用所有子组件的校验方法
    const formValidate = async(callback?: (valid: boolean, fields?: Values) => void) => {
        let errors: Values = []// 所有错误信息
        for(const field of fields){// async函数参数不能是error
            try {
                await field.validate('')// 分别去调用子类方法
            }catch(error) {
                errors = {
                    ...errors,
                    ...(error as Values).fields
                }
            }
        }
        if (!Object.keys(errors).length){// 无报错
            if (callback){// 传入了callback
                return callback(true)
            }else {
                return Promise.resolve(true)
            }
        }else {
            if (callback) {
                return callback?.(false, errors)// 有错误
            }else {
                return Promise.reject(errors)
            }
        }
    }

    const fields: FormItemContext[] = []
    const addField: FormContext['addField'] = (context: FormItemContext) => {
        fields.push(context)
        // setTimeout(() => {
        //     console.log(fields);
        // }, 1000)// 不过需要组件加载完才能调用
    }

    const context = {
        ...props,
        addField
    }

    provide(formContextKey, context)

    // form会看表单每一项是否合法，form-item只看自己那一项
    defineOptions({
        name: 'BForm'
    })

    defineExpose({
        formValidate
    })// 暴露方法，通过ref检测
</script>

<style scoped>

</style>