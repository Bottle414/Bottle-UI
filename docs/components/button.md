<script setup>
import { ref } from 'vue'
import Basic from '../examples/button/basic.vue'
import Disabled from '../examples/button/disabled.vue'
import Icon from '../examples/button/icon.vue'
import Loading from '../examples/button/loading.vue'
import Size from '../examples/button/size.vue'
import Attributes from '../examples/button/attributes.vue'
import Totop from '../examples/button/totop.vue'

</script>

# Button 按钮

## 基础用法
使用type、round、circle来定义按钮样式
<Basic/>

## 禁用状态
使用disabled属性设置按钮禁用
<Disabled/>

## 按钮图标
直接将图标嵌入按钮
<Icon/>

## 加载状态
使用loading属性使按钮变为加载状态(按钮加载时会变为禁用)
<Loading/>

## 改变大小
通过设置size属性来改变按钮大小
<Size/>

## 回到顶部
通过 toTop 属性为按钮设置回到顶部功能, 通过绑定 target 属性可以滚动到具有指定 id 的元素顶部
<Totop/>

# Button API
## Button Attributes
<Attributes/>

<style module>
</style>