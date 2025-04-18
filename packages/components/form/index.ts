import FormItem from './src/form-item.vue'
import Form from './src/form.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BFormItem = withInstall(FormItem)
export const BForm = withInstall(Form)

export default { BFormItem, BForm }

declare module 'vue' {
    export interface GlobalComponents {
        BFormItem: typeof FormItem
        BForm: typeof Form
    }
}