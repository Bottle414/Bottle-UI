<script setup>
import Basic from '../examples/switch/Basic.vue'
import Color from '../examples/switch/Color.vue'
import Disabled from '../examples/switch/Disabled.vue'
import Text from '../examples/switch/Text.vue'
import Attributes from '../examples/switch/Attributes.vue'

</script>

# Switch 开关

## 基础用法
最普通的开关
<demo vue="../examples/switch/Basic.vue"/>

## 开关颜色
使用 activeColor 为开关打开时设置颜色, inactiveColor 为开关关闭时设置颜色
<demo vue="../examples/switch/Color.vue"/>

## 禁用效果
使用 disabled 属性为开关设置禁用
<demo vue="../examples/switch/Disabled.vue"/>

## 文字
使用 activeText 设置打开时显示的文字, inactiveText 设置关闭时显示的文字
<demo vue="../examples/switch/Text.vue"/>

# Switch API
## Switch Attributes
<Attributes/>

<style module>
</style>