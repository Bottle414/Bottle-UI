import { ExtractPropTypes, PropType } from 'vue'
import { NOOP } from '@bottle-ui/utils/function'

export interface UploadFile {// 对于上传的文件的要求
    name:string,
    uid?: number,
    url?: string, // new ObjectURL实现预览
    progress?: number,
    raw?: File,
    size?: number,
    status: string
}
export type UploadFiles = UploadFile[]

export const uploadBaseProps = {// 给别人用的 props通过对象生成类型
    fileList: {
        type: Array as PropType<UploadFiles>, // 只写Array是不会有类型提示的
        default: () => [] as const// as const: 不要把它推断成never[]、any[]什么的，它就是[]
        // 要注意类型是只读的（尤其是联合类型或字面量类型时），否则 props 校验会不通过或失去提示。
        // 这样别人在里面写'file'就可以推断出类型叫'file'，而不是报错：不支持string类型
    },
    action: {// 上传路径
        type: String,
        default: ''
    },
    name: {// 上传名字
        type: String,
        default: 'file'
    },
    fileTypes: {// 接受上传的文件类型
        type: String,
        default: ''
    },
    method: {// 请求类型
        type: String,
        default: 'POST'
    },
    headers: {// HTTP请求头
        type: Object,
        default: () => ({})
    },
    data: {// 上传时的附带参数
        type: Object,
        default: () => ({})
    },
    multiple: Boolean, // 是否支持多文件上传
    limit: Number, // 最大上传文件数
    disabled: Boolean, // 禁用上传
    drag: Boolean,// 拖拽上传
    showList: Boolean// 显示文件列表
} as const// 变成只读的

export type UploadRawFile = File & { uid: number, isDirectory?: boolean }// 拓展原始类型，方便在hooks操作
export type UploadProgressEvent = ProgressEvent & { percentage: number}// 上传进度类型拓展

export interface UploadHooks {
    beforeUpload: (file: UploadRawFile) => Promise<boolean> | boolean,// 上传之前还没有那些特别的属性 返回true表示可以继续上传
    beforeRemove: (file: UploadFile, uploadFiles: UploadFiles) => void,// 移除的文件，新上传的文件
    onPreview: (file: UploadFile) => void,
    onChange: (file: UploadFile) => void,
    onRemove: (file: UploadFile, uploadFiles: UploadFiles) => void,// 删除时
    onProgress: (event: UploadProgressEvent, file: UploadFile, uploadFiles: UploadFiles) => void,// 进度条
    onSuccess: (response: any, file: UploadFile, uploadFiles: UploadFiles) => void,// 成功
    onError: (error: Error, file: UploadFile, uploadFiles: UploadFiles) => void// 失败
}

export const uploadProps = {
    ...uploadBaseProps,
    beforeUpload: {
        type: Function as PropType<UploadHooks['beforeUpload']>,
        default: NOOP
    },
    beforeRemove: {
        type: Function as PropType<UploadHooks['beforeRemove']>,
        default: NOOP
    },
    onPreview: {
        type: Function as PropType<UploadHooks['onPreview']>,
        default: NOOP
    },
    onChange: {
        type: Function as PropType<UploadHooks['onChange']>,
        default: NOOP
    },
    onRemove: {
        type: Function as PropType<UploadHooks['onRemove']>
        // 强依赖钩子，用户一定要提供删除方法，不然报错
    },
    onProgress: {
        type: Function as PropType<UploadHooks["onProgress"]>,
        default: NOOP
    },
    onSuccess: {
        type: Function as PropType<UploadHooks['onSuccess']>,
        default: NOOP
    },
    onError: {
        type: Function as PropType<UploadHooks['onError']>,
        default: NOOP
    }
}

// 抽离对象类型
export type UploadProps = ExtractPropTypes<typeof uploadProps>