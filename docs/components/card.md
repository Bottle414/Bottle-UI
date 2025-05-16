<script setup>
import Basic from '../examples/card/Basic.vue'
import Simple from '../examples/card/Simple.vue'
import Shadow from '../examples/card/Shadow.vue'
import Attributes from '../examples/card/Attributes.vue'
import Slots from '../examples/card/Slots.vue'

</script>

# Card 卡片

## 基础用法
Card 组件由header、body和footer组成。header 和 footer是可选的，其内容取决于一个具名的 slot。
<Basic/>

## 简单卡片
只含内容区域
<Simple/>

## 阴影效果
通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。
<Shadow/>

# Card API
## Card Attributes
<Attributes/>

## Card Slots
<Slots/>

<style module>
</style>