/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

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