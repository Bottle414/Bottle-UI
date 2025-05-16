import Checkbox from './src/checkbox.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BCheckbox = withInstall(Checkbox)
export * from './src/checkbox'

export default BCheckbox

declare module 'vue' {
    export interface GlobalComponents {
        BCheckbox: typeof BCheckbox
    }
}