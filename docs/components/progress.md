<script setup>
    import Basic from '../examples/progress/Basic.vue'
    import Circle from '../examples/progress/Circle.vue'
    import Dashboard from '../examples/progress/Dashboard.vue'
    import Color from '../examples/progress/Color.vue'
    import Animation from '../examples/progress/Animation.vue'
    import Attributes from '../examples/progress/Attributes.vue'
</script>

# Progress 输入框

## 基础用法
通过 percentage 绑定进度
<demo vue="../examples/progress/Basic.vue"/>

## 颜色
通过 color 属性设置颜色
<demo vue="../examples/progress/Color.vue"/>

## 圆形进度条
将 type 设置为 circle
<demo vue="../examples/progress/Circle.vue"/>

## 动画
通过 indeterminate 属性设置进度条动画
<demo vue="../examples/progress/Animation.vue"/>

## Progress Attributes
<Attributes/>
<Slots/>