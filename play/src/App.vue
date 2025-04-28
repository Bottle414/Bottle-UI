<template>
    <!-- <BIcon color="#bcc" :size="500" :depth="4">
        <AndroidOutlined/>
    </BIcon>
    <BIcon>
      <AndroidOutlined/>
    </BIcon> -->

    <!-- <BButton color="#eef" size="12" :loading="true" @click="handler">
        Click here to send message
    </BButton> -->
    <!-- <BCheckbox
        label="12"
        color="#bebe"
        v-model="checkvalue"
        :indeterminate="true"
    >
        Hi
    </BCheckbox>
    <br />
    <br />
    <BTooltip content="Hello" background="#333">Hi</BTooltip>
    <br />
    <br />
    <BSelect>
        <BOption value="3333"></BOption>
    </BSelect>
    <br />

     -->
    <br />
    <!-- <BVirtualList :items="items">
        <template #default="{ data }">
            <p>{{ data }}</p>
        </template>
    </BVirtualList> -->

    <!-- <BButton size="large" round @mousedown="handlerClick" disabled>Hi</BButton>
    <br />
    <BInput
        type="password"
        v-model="inputRef"
        placeholder="KKK"
        show-password
        clearable
        @focus="handleFocus"
        @blur="handleBlur"
    >
        <template #prefix>
            <BButton>Hi</BButton>
        </template>
        <template #suffix>Suffix</template>
    </BInput>
    <br /> -->

    <!-- <BForm
        ref="formRef"
        :model="state"
        :rules="{
            name: {
                min: 2,
                max: 3,
                message: '用户名2 - 3位',
                trigger: ['blur', 'change']
            },
            password: {
                min: 1,
                max: 3,
                message: '密码1 - 3位',
                trigger: ['blur', 'change']
            }
        }">
        <BFormItem prop="name" label="用户名"
            :rules="[
                {
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }
            ]"> -->
            <!-- 数组形式校验规则, 两个触发时机 -->
            <!-- 告诉它校验name -->
            <!-- <BInput
                v-model="state.name"
                @blur="handleBlur"
                @focus="handleFocus"
            ></BInput>
        </BFormItem>
        <BFormItem prop="password" label="用户密码"
            :rules="[
                {
                    required: true,
                    message: '请输入密码',
                    trigger: ['blur', 'change']
                }
            ]">
            <BInput
                v-model="state.password"
                @blur="handleBlur"
                @focus="handleFocus"
            ></BInput>
        </BFormItem>
        <BButton @click="formValidate">Test</BButton>
    </BForm>

    <BVirtualList :items="fakeData" :size="23">
        <template #default="{ data }">
            <p>{{ data }}</p>
        </template>
    </BVirtualList>
    <br> -->
    <!-- <BCard bodyClass="h" style="width: 50%; transform: translateX(30px);" shadow="never">
        <template #header>
            HI
        </template>
        <BButton size="medium">H</BButton>
    </BCard> --> 
    <!-- <BSwitch v-model="checked" activeText="开" inactiveText="关" active-color="red">
    </BSwitch>

    <BUpload multiple :before-upload="handleBeforeUpload" action="http://localhost:3000/upload" v-slot="{ dragging }" showList listType="image">
        <BButton size="large"  :style="{ opacity: dragging.dragging ? 0 : 1, transition: 'opacity 0.3s' }">Upload</BButton>
    </BUpload> -->

    <BProgress indeterminate></BProgress>
    <BProgress type="circle" indeterminate color="lightblue"></BProgress>
    <BProgress type="dashboard" :percentage="0"></BProgress>
    <!-- <BButton size="medium" :round="true">Button</BButton>
    <BTree
        :data="data"
        :keyField="'key'"
        v-model:selectedKeys="selected"
        virtual
        checkbox
        :on-load="asyncload"
        :defaultCheckedKeys="checked"
        :indeterminateKeys="['1','2']"
    ></BTree>

    <BTooltip content="HHHHIIIIIIIIllllllllllooooo" style="margin: 100px;" placement="top" light>
        Hover me!
    </BTooltip> -->
</template>

<script lang="ts" setup>
    import BProgress from '@bottle-ui/components/progress'
    // import BIcon from '@bottle-ui/components/icon';
    // import BTree from '@bottle-ui/components/tree'
    // import BCheckbox from '@bottle-ui/components/checkbox'
    // import BButton from '@bottle-ui/components/button'
    // import BSelect from '@bottle-ui/components/select'
    // import BOption from '@bottle-ui/components/select'
    // import BTooltip from '@bottle-ui/components/tooltip'
    // import BVirtualList from '@bottle-ui/components/virtual-list'
    // // import type { TreeOption } from '@bottle-ui/components/tree'
    // // import BIcon from '@bottle-ui/components/icon'
    // import BInput from '@bottle-ui/components/input'
    // import { BFormItem, BForm } from '@bottle-ui/components/form'
    // import { ref, watch } from 'vue'
    // import type { FormInstance } from '@bottle-ui/components/form'
    // import BUpload from '@bottle-ui/components/upload'
    // import type { UploadRawFile } from '@bottle-ui/components/upload'
    // import BCard from '@bottle-ui/components/card'
    // import BSwitch from '@bottle-ui/components/switch'
    // 如果设置了 required，当值是空字符串 ""，它仍然算是“存在的”，所以 required 通过了，然后：
    // 如果值是空字符串，它会 跳过 min/max 校验，认为“你没写值，没必要校验长度”。
    // 换句话说：空字符串只会触发 required 校验，不会触发 min/max 校验。


    // const selected = ref([])
    // const defaultCheckedKeys = ['1', '2']
    // const checked = ref(false)
    // const state = ref({
    //     name: '',
    //     password: '7k7kkkk'
    // })
    // const formRef = ref<FormInstance>()
    // const fakeData = ref([1,2,3,4,5,6,7,8,9,8,7,4,2,1,4,6])

    // async function handleBeforeUpload(rawFile: UploadRawFile){
    //     console.log('beforeup', rawFile);
    //     return true
    // }

    // function formValidate(){
    //     const form = formRef.value
    //     form?.formValidate((valid, err) => {
    //         console.log(valid, err);
    //     })
    // }
    // {
    //     min: 6,
    //     max: 10,
    //     required: true,
    //     message: '密码长度为6 - 10',
    //     trigger: ['change', 'blur']
    // }
    // 不要把校验规则绑错了

    // const checked = ref(['1','3'])// 类型要一致
    // // const items = ref([1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 11, 2, 1, 1, 1, 1, 1, 1, 11, 2, 1, 1, 1, 1, 1, 1, 1])// 假数据

    // const checkvalue = ref(false)
    // let inputRef = ref('hi')

    // function handlerClick() {
    //     console.log('hihihi')
    // }

    // function handleBlur() {
    //     console.log('blur')
    // }

    // function handleFocus() {
    //     console.log('focus')
    // }

    // watch(inputRef, () => {
    //     console.log('inputRef: ' + inputRef.value)
    // })

    // watch(selected, () => {
    //     console.log('selectedout', selected.value)
    // })

    // const asyncload = async (node: TreeOption) => {// 模拟异步加载
    //     // 模拟异步接口
    //     await new Promise(resolve => setTimeout(resolve, 1000))

    //     // 返回新的子节点数据（注意是 TreeOption[] 结构）
    //     return [
    //         { key: '3', label: '异步子节点1', children: [], disabled: true },
    //         {
    //             key: '4', label: '异步子节点2', children: [{
    //                 key: '5',
    //                 label: 'Hi'
    //             }], isLeaf: false
    //         }
    //     ]
    // }

    // function handler() {
    //     console.log('kkkk');
    // }

    // function handlerLoad() {
    //     console.log('load');
    // }

    // const data = [
    //     {
    //         label: "Node 1",
    //         key: "1",
    //         isLeaf: false,
    //         children: [
    //             {
    //                 label: "Node 1.1",
    //                 key: "1.1",
    //                 // disabled: true,
    //                 children: []
    //             },
    //             {
    //                 label: "Node 1.2",
    //                 key: "1.2",
    //                 children: []
    //             }
    //         ]
    //     },
    //     {
    //         label: "Node 2",
    //         key: "2",
    //         children: []
    //     },
    //     {
    //         key: '3',
    //         label: '异步子节点1',
    //         children: [],
    //         // disabled: true
    //     },
    //     {
    //         key: '4',
    //         label: '异步子节点2',
    //         children: [{
    //             key: '5',
    //             label: 'Hi'
    //         }],
    //         isLeaf: false
    //     },
    //     {
    //         key: '3',
    //         label: '异步子节点1',
    //         children: [],
    //         // disabled: true
    //     }
    // ];
</script>

<style scoped>
    .h {
        background: red;
    }
</style>
