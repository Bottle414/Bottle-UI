<script setup>
import Basic from '../examples/tree/Basic.vue'
import Custom from '../examples/tree/Custom.vue'
import Async from '../examples/tree/Async.vue'
import Checkbox from '../examples/tree/Checkbox.vue'
import Disabled from '../examples/tree/Disabled.vue'
import Default from '../examples/tree/Default.vue'
import Virtual from '../examples/tree/Virtual.vue'
import Attributes from '../examples/tree/Attributes.vue'
import Slots from '../examples/tree/Slots.vue'

</script>

# Tree 树形组件

## 基础用法
基础的树形结构展示
<demo vue="../examples/tree/Basic.vue"/>

## 自定义内容
使用默认插槽对每个节点插入自定义内容
<demo vue="../examples/tree/Custom.vue"/>

## 异步加载
<demo vue="../examples/tree/Async.vue"/>

## 带勾选框
使用 checkbox 为树形组件带上勾选框
<demo vue="../examples/tree/Checkbox.vue"/>

## 禁用效果
使用 disabledKeys 属性设置禁用
<demo vue="../examples/tree/Disabled.vue"/>

## 默认选中和默认不定状态
使用 defaultSeleckedKeys 和 indeterminateKeys 为树形组件设置默认选中节点与不定状态节点
<demo vue="../examples/tree/Default.vue"/>

## 虚拟滚动
使用 virtual 属性提供虚拟滚动
<demo vue="../examples/tree/Virtual.vue"/>

# Tree API
## Tree Attributes
<Attributes/>

## Tree Slots
<Slots/>

<style module>
</style>