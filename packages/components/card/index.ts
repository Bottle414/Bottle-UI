import Card from './src/card.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BCard = withInstall(Card)
export default BCard

export * from './src/card'

declare module 'vue' {
    export interface GlobalComponents {
        BCard: typeof Card
    }
}