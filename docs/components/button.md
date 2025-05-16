<script setup>
import Basic from '../examples/button/Basic.vue'
import Disabled from '../examples/button/Disabled.vue'
import Icon from '../examples/button/Icon.vue'
import Loading from '../examples/button/Loading.vue'
import Size from '../examples/button/Size.vue'
import Attributes from '../examples/button/Attributes.vue'
import Totop from '../examples/button/Totop.vue'

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