import { ExtractPropTypes, PropType } from 'vue'
import { UploadFiles, UploadFile } from './upload'

export type listType = 'image' | 'text'

export const uploadListProps = {
    fileList: {
        type: Array as PropType<UploadFiles>,
        default: () => [] as const
    },
    listType: {
        type: String as PropType<listType>,
        default: 'text'
    }
}as const

export type UploadListProps = ExtractPropTypes<typeof uploadListProps>

export const uploadListEmits = {
    remove: (file: UploadFile) => file
}
export type UploadListEmits = typeof uploadListEmits