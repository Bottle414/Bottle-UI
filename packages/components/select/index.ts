import { withInstall } from '@bottle-ui/utils/withInstall'
import Select from './src/select.vue'

export const BSelect = withInstall(Select)
export * from './src/select'

export default BSelect

declare module 'vue' {
    export interface GlobalComponents {
        BSelect: typeof BSelect
    }
}