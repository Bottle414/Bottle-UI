/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import Card from './src/card.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BCard = withInstall(Card)
export * from './src/card'

export default BCard

declare module 'vue' {
    export interface GlobalComponents {
        BCard: typeof BCard
    }
}