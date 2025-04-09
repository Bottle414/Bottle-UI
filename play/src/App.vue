<template>
    <!-- <BIcon color="#bcc" :size="500" :depth="4">
        <AndroidOutlined/>
    </BIcon>
    <BIcon>
      <AndroidOutlined/>
    </BIcon> -->
    <BTree :data="data" :checked="[1]"/>
</template>

<script lang='ts' setup>
// import BIcon from '@bottle-ui/components/icon';
// import { AndroidOutlined } from '@vicons/antd'
import BTree from '@bottle-ui/components/tree'

const data = [
    {
        label: "Node 1",
        key: "1",
        children: [
            {
                label: "Node 1.1",
                key: "1.1",
                children: []
            },
            {
                label: "Node 1.2",
                key: "1.2",
                children: []
            }
        ]
    },
    {
        label: "Node 2",
        key: "2",
        children: []
    }
];

</script>

<style scoped>
  
</style>