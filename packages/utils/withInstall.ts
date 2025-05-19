/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { App, Component } from "vue";

// 新定义一个有 install 方法的类型——带有install的单文件组件
export type SFCWithInstall<T> = T & { install(app: App): void }// 类型增强, 原来的组件类型 + 一个 install 方法 element源码用的T & Plugin

// 给组件添加install方法, 用于全局注册
export function withInstall<T extends Component>(component : T): SFCWithInstall<T>{
    (component as SFCWithInstall<T>).install = (app: App) => {// 增加挂载方法
        app.component(component.name!, component)
    }
    return component as SFCWithInstall<T>
}