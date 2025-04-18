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
            <div :class="ns.e('error')">
                <slot name="error">
                    {{ invalidateMessage }}
                </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, provide, computed } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import {
        formItemProps,
        formItemContextKey,
        FormItemValidateState,
        FormItemContext,
        Trigger,
        FormItemRule
    } from './form-item'

    const ns = useNamespace('form-item')
    const props = defineProps(formItemProps) // 没定义props时会发现传进来的prop挂在最外层
    // 校验
    const validateState = ref<FormItemValidateState>('') // 默认不成功不失败
    const invalidateMessage = ref('校验失败')

    const _rules = computed<FormItemRule[]>(() => {
        // 拿到外面的校验规则
        const rules = props.rules
        if (!rules) return []
        return Array.isArray(rules) ? rules : [rules]
        
        // return rules ? (Array.isArray(rules) ? rules : [rules]) : []
        // 要是存在，是数组就返回数组，不然就包成数组，兼容对象写法{}和数组写法[{}, {}] 逆天写法，改了
    })

    function getFilteredRules(trigger: Trigger){
        // blur 或者 change
        const rules = _rules.value
        return rules.filter((rule) => {
            const userTrigger = rule.trigger// 用户传来的trigger
            if (Array.isArray(userTrigger)){// 要是rule是一个数组
                return userTrigger.includes(trigger)// 查看里面是否包含这个trigger
            }else {
                return userTrigger === trigger// 直接看值是否相等
            }
        })
    }

    const validate: FormItemContext['validate'] = async (
        trigger: Trigger,
        callback?
    ) => {
        // 传入触发方式
        // 拿到触发时机、校验通过调用promise.then或者传入callback
        const filteredRules = getFilteredRules(trigger)// 拿到过滤后的规则
        // 找到对应数据源拿到prop校验数据
        console.log('trigger', trigger, filteredRules)
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
