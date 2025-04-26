<script setup>
import { ref } from 'vue'
import Basic from '../examples/checkbox/basic.vue'
import Status from '../examples/checkbox/status.vue'
import Color from '../examples/checkbox/color.vue'
import Size from '../examples/checkbox/size.vue'
import Attributes from '../examples/checkbox/attributes.vue'
import Events from '../examples/checkbox/events.vue'
import Slots from '../examples/checkbox/slots.vue'

</script>

# Checkbox 复选框

## 基础用法
使用modelValue绑定一个值进行两种状态的切换; 使用label或者默认插槽为复选框设置标签
<Basic/>

## 状态
使用disabled属性设置按钮禁用; checked属性设置为勾选状态; indeterminate属性设置为不定状态; loading设置加载状态
<Status/>

## 改变大小
使用size属性设置大小
<Size/>

## 颜色
通过color属性来改变复选框颜色
<Color/>

# Checkbox API
## Checkbox Attributes
<Attributes/>

## Checkbox Events
<Events/>

## Checkbox Slots
<Slots/>

<style module>
</style>