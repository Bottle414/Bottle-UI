<script setup>
import Basic from '../examples/form/Basic.vue'
import Validate from '../examples/form/Validate.vue'
import Attributes from '../examples/form/Attributes.vue'
import Slots from '../examples/form/Slots.vue'
import SlotsItem from '../examples/form/SlotsItem.vue'

</script>

# Form 表单

## 基础用法
使用 model 熟悉绑定对象, form-item 作为表单项，并在其中嵌入内容
<demo vue="../examples/form/Basic.vue"/>

## 表单校验
<demo vue="../examples/form/Validate.vue"/>

# Form API
<demo vue="../examples/form/Attributes.vue"/>

## Form Slots
<Slots/>

## FormItem Slots
<SlotsItem/>