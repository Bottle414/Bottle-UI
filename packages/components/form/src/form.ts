import { ExtractPropTypes, InjectionKey, PropType } from "vue"
import { FormItemRule, Arrayable, FormItemContext } from "./form-item"

export const formProps = {
    model: Object,
    rules: Object as PropType<Record<string, Arrayable<FormItemRule>>>,
    showMessage: {
        type: Boolean,
        default: true
    }
}as const

export type FormProps = Partial<ExtractPropTypes<typeof formProps>>

export interface FormContext extends FormProps {
    // 一些方法
    addField: (field: FormItemContext) => void
}

export const formContextKey: InjectionKey<FormContext> = Symbol()