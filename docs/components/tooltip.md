<script setup>
import { ref } from 'vue'
import Placement from '../examples/tooltip/placement.vue'
import Custom from '../examples/tooltip/custom.vue'
import Theme from '../examples/tooltip/theme.vue'
import Attributes from '../examples/tooltip/attributes.vue'
import Slots from '../examples/tooltip/slots.vue'

</script>

# Tooltip 文字提示

## 基础用法
可以通过设置placement属性来决定文字提示的方向, content属性设置文字效果
<Placement/>

## 为元素加上文字提示
使用插槽包裹元素即可为元素添加文字提示
<Custom/>

## 不同的主题
文字提示默认是黑底白字，可以通过light属性设置白底黑字
<Theme/>

# Tooltip API
## Tooltip Attributes
<Attributes/>

## Tooltip Slots
<Slots/>

<style module>
</style>