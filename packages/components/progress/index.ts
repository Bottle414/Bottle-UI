import Progress from './src/progress.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BProgress = withInstall(Progress)
export * from './src/progress'

export default BProgress

declare module 'vue' {
    export interface GlobalComponents {
        BProgress: typeof BProgress
    }
}