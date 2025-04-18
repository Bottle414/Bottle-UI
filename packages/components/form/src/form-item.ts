import { ExtractPropTypes, PropType, InjectionKey } from "vue"
import type { RuleItem } from "async-validator"

export type Arrayable<T> = T | T[]// 抽出来的工具泛型

export interface FormItemRule extends RuleItem {// 已有的不够使用，需要拓展
    trigger?: Arrayable<string>
}

export const  formItemProps = {
    prop: {
        type: String,
        default: ''
    },
    label: String,// 表单项标签
    rules: [Object, Array] as PropType<Arrayable<FormItemRule>>,// 校验规则,  可以是数组写法也可以是对象写法
    showMessage: {
        type: Boolean,
        default: true
    }// 是否显示校验错误信息
} as const

export const formItemValidateState = ['success', 'error', ''] as const
export type FormItemValidateState = typeof formItemValidateState[number]// 依次去取'success', 'fail', ''

export const formItemEmits = {
    change: (e: Event) => e,
    blur: (e: Event) => e
}

export type FormItemEmits = typeof formItemEmits

export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>
// 加了default，showMessage变成必选项了，partial一下

export const trigger = ['change', 'blur', ''] as const
export type Trigger = typeof trigger[number]

export interface FormItemContext extends FormItemProps {
    validate: (
        trigger: Trigger,
        callback?: (isValid: boolean) => void// 不是谁还写回调函数
    ) => Promise<void>
}

export const formItemContextKey: InjectionKey<FormItemContext> = Symbol()// 直接把整个form-item实例传过去