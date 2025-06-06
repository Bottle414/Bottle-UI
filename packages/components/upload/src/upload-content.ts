/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { ExtractPropTypes, PropType } from 'vue'
import { uploadBaseProps, uploadProps, UploadRawFile, UploadProgressEvent } from './upload'
import { NOOP } from '@bottle-ui/utils/function'

export interface UploadContentHooks {
    onStart: (rawFile: UploadRawFile) => void,// 开始上传，上传前是原始文件
    onProgress: (event: UploadProgressEvent, rawFile: UploadRawFile) => void,
    onRemove: (rawFile: UploadRawFile) => void,
    onSuccess: (response: any ,rawFile: UploadRawFile) => void,
    onError: (error: Error,rawFile: UploadRawFile) => void
}

export const uploadContentProps = {
    ...uploadBaseProps,
    beforeUpload: uploadProps['beforeUpload'],
    onStart: {
        type: Function as PropType<UploadContentHooks['onStart']>,
        default: NOOP
    },
    onProgress: {
        type: Function as PropType<UploadContentHooks['onProgress']>,
        default: NOOP
    },
    onRemove: {
        type: Function as PropType<UploadContentHooks['onRemove']>,
        default: NOOP
    },
    onSuccess: {
        type: Function as PropType<UploadContentHooks['onSuccess']>,
        default: NOOP
    },
    onError: {
        type: Function as PropType<UploadContentHooks['onError']>,
        default: NOOP
    }
}as const

export interface RequestOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    file: File,
    name: string,
    action: string,
    headers: Headers,
    data: Record<string, any>,
    onProgress: (event: UploadProgressEvent) => void,
    onError: (error: any) => void,
    onSuccess: (response: any) => void,
}

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>