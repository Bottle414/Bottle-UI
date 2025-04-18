<template>
    <div
        :class="[
            ns.b(),
            ns.is('success', validateState === 'success'),
            ns.is('error', validateState === 'error')
        ]"
    >
        <label :class="ns.e('label')">
            <slot name="label">
                {{ label }}
            </slot>
        </label>
        <div :class="ns.e('content')">
            <slot></slot>
            <div v-if="validateState === 'error'" :class="ns.e('error')">
                <slot name="error">
                    {{ invalidateMessage }}
                </slot>
            </div>
            <div v-else-if="validateState === 'success'" :class="ns.e('success')">
                <slot name="success">
                    <BIcon>OK</BIcon>
                </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, provide, computed, inject, onMounted } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import {
        formItemProps,
        formItemContextKey,
        FormItemValidateState,
        FormItemContext,
        Trigger,
        FormItemRule,
        Arrayable
    } from './form-item'
    import { formContextKey } from './form'
    import AsyncValidator from 'async-validator'
    import type Values from 'async-validator'
    import BIcon from '@bottle-ui/components/icon'

    const ns = useNamespace('form-item')
    const props = defineProps(formItemProps) // 没定义props时会发现传进来的prop挂在最外层
    // 校验
    const validateState = ref<FormItemValidateState>('') // 默认不成功不失败
    const invalidateMessage = ref('')

    const formContext = inject(formContextKey)

    onMounted(() => {
        formContext?.addField(context)// 把自己的上下文传给父亲(类似于把自己这个实例)
    })

    function toArray(rules: Arrayable<FormItemRule> | undefined){
        if (!rules) return []
        return Array.isArray(rules) ? rules : [rules]
        
        // return rules ? (Array.isArray(rules) ? rules : [rules]) : []
        // 要是存在，是数组就返回数组，不然就包成数组，兼容对象写法{}和数组写法[{}, {}] 逆天写法，改了
    }

    const _rules = computed<FormItemRule[]>(() => {
        // 拿到自己的和父组件的校验规则
        const selfRules = toArray(props.rules)// 子组件校验规则
        const formRules = formContext?.rules// 父组件校验规则
        // 保证父组件有规则，自己还有prop
        if (formRules && props.prop){
            // console.log(formRules, props.prop, formRules[props.prop]);
            const _temp = formRules[props.prop]// 找到绑定了的校验项, 没prop校验不了
            if (_temp){
                selfRules.push(...toArray(_temp)) // 把它塞进去
            }
        }
        return selfRules// 返回整合后的数组
    })

    function getFilteredRules(trigger: Trigger){
        // blur 或者 change
        const rules = _rules.value
        return rules.filter((rule) => {
            const userTrigger = rule.trigger// 用户传来的trigger
            if (!userTrigger || !rule.trigger) return true// 没写就都要校验
            if (Array.isArray(userTrigger)){// 要是rule是一个数组
                return userTrigger.includes(trigger)// 查看里面是否包含这个trigger
            }else {
                return userTrigger === trigger// 直接看值是否相等
            }
        })
    }

    function onValidateSuccess(){// 校验成功
        validateState.value = 'success'
    }

    function onValidateError(err: Values){// 校验失败
        validateState.value = 'error'
        const { errors } = err as any
        invalidateMessage.value = errors ? errors[0].message : '验证失败'
    }

    const validate: FormItemContext['validate'] = async (
        trigger: Trigger,
        callback?
    ) => {
        // 传入触发方式
        // 拿到触发时机、校验通过调用promise.then或者传入callback
        const filteredRules = getFilteredRules(trigger)// 拿到过滤后的规则
        // 找到对应数据源拿到prop校验数据, 进行校验
        const modelName = props.prop// 绑定的属性名

        const validator = new AsyncValidator({// [要校验的项]: 校验规则
            [modelName]: filteredRules
        })

        const model = formContext?.model
        if (!model) return Promise.reject('no model')

        return validator
        .validate({
            [modelName]: model[modelName]// 要校验form绑定的有效值, 有就校验对应的值，没有就undefined不校验了
        })
        .then(() => {
            onValidateSuccess()
        })
        .catch((err) => {
            onValidateError(err)// 点开源码可以看到err.errors可以显示是哪一项报的校验错误
            return Promise.reject(err)
        })
    }

    // 考虑到可能会有多层嵌套，使用provide和inject
    const context: FormItemContext = {
        // 传入所有的上下文
        ...props, // 直接...props会失去响应式 ...toRefs(props)但这样以后都会多一个.value  在最外层加上reactive就可以避免.value
        validate
    }

    provide(formItemContextKey, context)

    defineOptions({
        name: 'BFormItem'
    })
</script>
