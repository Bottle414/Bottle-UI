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