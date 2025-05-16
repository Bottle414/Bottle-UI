import Collapse from './src/collapse.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BCollapse = withInstall(Collapse)
export * from './src/collapse'

export default BCollapse

declare module 'vue' {
    export interface GlobalComponents {
        BCollapse: typeof BCollapse
    }
}