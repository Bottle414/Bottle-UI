<script setup>
import { ref } from 'vue'
import Basic from '../examples/upload/basic.vue'
import Drag from '../examples/upload/drag.vue'
import Limit from '../examples/upload/limit.vue'
import Custom from '../examples/upload/custom.vue'
import Multiple from '../examples/upload/multiple.vue'
import Preview from '../examples/upload/preview.vue'
import Disabled from '../examples/upload/disabled.vue'
import Attributes from '../examples/upload/attributes.vue'
import Slots from '../examples/upload/slots.vue'

</script>

# Upload 上传组件

## 基础用法
在使用 Upload 包裹自定义元素后，点击自定义元素即可上传文件
<Basic/>

## 自定义图标
可以使用 #icon 插槽自定义图标
<Custom/>

## 文件预览
使用 listType 属性设置预览类型, 需配合 showList 使用
<Preview/>

## 拖拽上传
使用 drag 属性进行拖拽上传
<Drag/>

## 多文件上传
使用 multiple 进行多文件上传
<Multiple/>

## 禁用上传
使用 disabled 禁用文件上传
<Disabled/>

## 文件限制
可以使用 accept 属性限制文件上传类型，使用 limit 属性限制最大上传数量
<Limit/>

# Upload API
## Upload Attributes
<Attributes/>

## Upload Slots
<Slots/>

<style module>
</style>