<script setup>
import Basic from '../examples/upload/Basic.vue'
import Drag from '../examples/upload/Drag.vue'
import Limit from '../examples/upload/Limit.vue'
import Custom from '../examples/upload/Custom.vue'
import Multiple from '../examples/upload/Multiple.vue'
import Preview from '../examples/upload/Preview.vue'
import Disabled from '../examples/upload/Disabled.vue'
import Attributes from '../examples/upload/Attributes.vue'
import Slots from '../examples/upload/Slots.vue'

</script>

# Upload 上传组件

## 基础用法
在使用 Upload 包裹自定义元素后，点击自定义元素即可上传文件
<demo vue="../examples/upload/Basic.vue"/>

## 自定义图标
可以使用 #icon 插槽自定义图标
<demo vue="../examples/upload/Custom.vue"/>

## 文件预览
使用 listType 属性设置预览类型, 需配合 showList 使用
<demo vue="../examples/upload/Preview.vue"/>

## 拖拽上传
使用 drag 属性进行拖拽上传
<demo vue="../examples/upload/Drag.vue"/>

## 多文件上传
使用 multiple 进行多文件上传
<demo vue="../examples/upload/Multiple.vue"/>

## 禁用上传
使用 disabled 禁用文件上传
<demo vue="../examples/upload/Disabled.vue"/>

## 文件限制
可以使用 accept 属性限制文件上传类型，使用 limit 属性限制最大上传数量
<demo vue="../examples/upload/Limit.vue"/>

# Upload API
## Upload Attributes
<Attributes/>

## Upload Slots
<Slots/>

<style module>
</style>