/** toast一些配置项 */

// 提示类型
// default--默认 info--普通 sc--成功 err--错误 warn--警告
export const toastTypes = ['default', 'info', 'sc', 'err', 'warn']

export type TypeConfig = '' | 'default' | 'info' | 'sc' | 'err' | 'warn'

// 提示位置
export type Position = 'top' | 'center' | 'bottom'

// 不同类型对应不同的图标
export const icons = {
    default: '',
    info: 'icon-xiaoxi',
    sc: 'icon-duihao',
    err: 'icon-V',
    warn: 'icon-gantanhao',
}

// Notify props type
export interface NotifyConfig {
    // 提示内容
    content?: string | React.ReactNode
    // 持续时间
    during?: number
    // 提示类型
    type?: TypeConfig
}

// Notifications props type
export interface NotificationsConfig {
    // 容器挂载点 
    container?: HTMLElement | ShadowRoot
    // 位置 top--上 center--中 bottom--下
    position?: Position
    // 全局提醒类型
    type?: TypeConfig
    // 单个提示可视时间 单位s
    during?: number
}

// open方法的配置
export interface OpenConfig extends NotifyConfig {
    key: React.Key
    position?: Position
    content?: string | React.ReactNode
    during?: number
}

type OptionalConfig = Partial<OpenConfig>

// 轻提示API类型
export interface NotificationAPI {
    open: (config: OptionalConfig) => void
}

interface OpenTask {
    type: 'open'
    config?: OpenConfig
}

export type Task = OpenTask

/** func */

// 合并配置
export function mergeConfig<T>(...configList: Partial<T>[]): T {
    const merge: T = {} as T

    configList.forEach((config) => {
        (Object.keys(config) as Array<keyof T>).forEach((key) => {
            const val = config[key]

            if (val !== undefined) {
                merge[key] = val
            }
        })
    })

    return merge
}

  