import { withInstall } from '@bottle-ui/utils/withInstall'
import Select from './src/select.vue'

export const BSelect = withInstall(Select)
export default BSelect

export * from './src/select'

declare module 'vue' {
    export interface GlobalComponents {
        BSelect: typeof Select
    }
}