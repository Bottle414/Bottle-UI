import Collapse from './src/collapse.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BCollapse = withInstall(Collapse)
export default BCollapse

export * from './src/collapse'

declare module 'vue' {
    export interface GlobalComponents {
        BCollapse: typeof Collapse
    }
}