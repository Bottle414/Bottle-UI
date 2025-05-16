<script setup>
    import Basic from '../examples/input/Basic.vue'
    import Custom from '../examples/input/Custom.vue'
    import Password from '../examples/input/Password.vue'
    import Attributes from '../examples/input/Attributes.vue'
    import Events from '../examples/input/Events.vue'
    import Slots from '../examples/input/Slots.vue'
</script>

# Input 输入框

## 基础用法
通过 v-model 绑定值，就能像原生 input 组件一样使用
<demo vue="../examples/input/Basic.vue"/>

## 密码框
<demo vue="../examples/input/Password.vue"/>

## 前后缀和标签
通过具名插槽 #prefix 和 #suffix 来添加前缀和后缀, 通过 label 属性为输入框设置标签
<demo vue="../examples/input/Custom.vue"/>

## Input Attributes
<Attributes/>

## Input Events
<Events/>

## Input Slots
<Slots/>