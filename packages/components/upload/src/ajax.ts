import { UploadProgressEvent } from './upload';
import { RequestOptions } from './upload-content';

export function httpRequest(options: RequestOptions){
    const xhr = new XMLHttpRequest()
    const action = options.action

    xhr.upload.addEventListener('progress', (e) => {// fetch不支持上传进度事件中断也更麻烦，虽然它更现代还基于promise，但这里还是Ajax适合一些
        // 只有在不需要监听上传进度、只发普通请求时，fetch 才更优雅
        // 当然也可以使用ReadableStream API监控上传进度 但可能不兼容
        // 加载进度
        const progressEvent = e as UploadProgressEvent// as 是类型层面的欺骗，它不会真的给 e 加上 percentage, 依旧需要手动赋值
        progressEvent.percentage = e.total > 0 ? (e.loaded / e.total) * 100 : 0

        options.onProgress(progressEvent)// 调用上传进度
    })

    const headers = options.headers
    if (headers){
        for (const [key, value] of Object.entries(options.headers)){
            xhr.setRequestHeader(key, value)
        }
    }

    const formData = new FormData()

    if (options.data){
        for (const [key, value] of Object.entries(options.data)){
            formData.append(key, value)
        }
    }
    formData.append(options.name, options.file)// 最后还需要加上文件

    xhr.onload = function(){// 上传完毕
        options.onSuccess(xhr.response)
    }

    xhr.addEventListener('error', function(err){
        options.onError(xhr)
    })

    xhr.send(formData)

    return xhr
}