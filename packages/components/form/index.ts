import { Values } from 'async-validator'
import FormItem from './src/form-item.vue'
import Form from './src/form.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BFormItem = withInstall(FormItem)
export const BForm = withInstall(Form)

export default { BFormItem, BForm }

// export type FormInstance = InstanceType<typeof Form>// 拿到组件实例的类型, 但这样不准确

export type FormInstance = {
    formValidate: (callback?: (valid: boolean, fields?: Values) => void) => Promise<boolean | string>
}// 类型提示

declare module 'vue' {
    export interface GlobalComponents {
        BFormItem: typeof BFormItem
        BForm: typeof BForm
    }
}