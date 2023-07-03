/** 类型和数据 */

// 通知类型
export const types = ['default', 'info', 'sc', 'err', 'warn']

// 通知类型的类型
export type TypesConfig = 'default' | 'info' | 'sc' | 'err' | 'warn'

// icons类型
export type IconsType = Record<TypesConfig, string>

// icons
export const icons: IconsType = {
    default: '',
    info: 'icon-xiaoxi',
    sc: 'icon-chenggong',
    err: 'icon-shibai',
    warn: 'icon-jinggao_tixing',
}

// Notify prop
export interface NotifyProp {
    // 唯一标识
    key?: React.Key
    // 操作标识
    operKey?: React.Key
    // 类型
    type?: TypesConfig
    // 内容
    content?: string | React.ReactNode
    // 持续时间 单位s
    during?: number
}