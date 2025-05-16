<script setup>
import Basic from '../examples/checkbox/Basic.vue'
import Status from '../examples/checkbox/Status.vue'
import Color from '../examples/checkbox/Color.vue'
import Size from '../examples/checkbox/Size.vue'
import Attributes from '../examples/checkbox/Attributes.vue'
import Events from '../examples/checkbox/Events.vue'
import Slots from '../examples/checkbox/Slots.vue'

</script>

# Checkbox 复选框

## 基础用法
使用modelValue绑定一个值进行两种状态的切换; 使用label或者默认插槽为复选框设置标签
<demo vue="../examples/checkbox/Basic.vue"/>

## 状态
使用disabled属性设置按钮禁用; checked属性设置为勾选状态; indeterminate属性设置为不定状态; loading设置加载状态
<demo vue="../examples/checkbox/Status.vue"/>

## 改变大小
使用size属性设置大小
<demo vue="../examples/checkbox/Size.vue"/>

## 颜色
通过color属性来改变复选框颜色
<demo vue="../examples/checkbox/Color.vue"/>

# Checkbox API
## Checkbox Attributes
<Attributes/>

## Checkbox Events
<Events/>

## Checkbox Slots
<Slots/>

<style module>
</style>