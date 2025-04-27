<script setup>
import { ref } from 'vue'
import Basic from '../examples/tree/basic.vue'
import Custom from '../examples/tree/custom.vue'
import Async from '../examples/tree/async.vue'
import Checkbox from '../examples/tree/checkbox.vue'
import Disabled from '../examples/tree/disabled.vue'
import Default from '../examples/tree/default.vue'
import Virtual from '../examples/tree/virtual.vue'
import Attributes from '../examples/tree/attributes.vue'
import Slots from '../examples/tree/slots.vue'

</script>

# Tree 树形组件

## 基础用法
基础的树形结构展示
<Basic/>

## 自定义内容
使用默认插槽对每个节点插入自定义内容
<Custom/>

## 异步加载
<Async/>

## 带勾选框
使用 checkbox 为树形组件带上勾选框
<Checkbox/>

## 禁用效果
使用 disabledKeys 属性设置禁用
<Disabled/>

## 默认选中和默认不定状态
使用 defaultSeleckedKeys 和 indeterminateKeys 为树形组件设置默认选中节点与不定状态节点
<Default/>

## 虚拟滚动
使用 virtual 属性提供虚拟滚动
<Virtual/>

# Tree API
## Tree Attributes
<Attributes/>

## Tree Slots
<Slots/>

<style module>
</style>