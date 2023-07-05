/** 类型和数据 */

// 通知类型
export const types = ['default', 'info', 'sc', 'err', 'warn']

// 通知类型的类型
export type TypesConfig = 'default' | 'info' | 'sc' | 'err' | 'warn'

// 通知位置
export type PositionConfig = 'top' | 'center' | 'bottom'

// icons类型
export type IconsType = Record<TypesConfig, string>

// 默认位置
export const POSITION = 'top'

// 默认持续时间
export const DURING = 2

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
    dataKey?: string
    // 类型
    type?: TypesConfig
    // 内容
    content?: string | React.ReactNode
    // 持续时间
    during?: number
    // 位置
    position?: PositionConfig
}

// global config
export interface GlobalConfig {
    during?: number
    position?: PositionConfig
}

// toast func type
export type ToastFuncType = (content?: string | React.ReactNode, localConfig?: GlobalConfig) => void

// toast type
export interface ToastType extends Record<TypesConfig, ToastFuncType> {
    config: GlobalConfig
}

// open config type
export interface OpenConfigType extends GlobalConfig {
    type: TypesConfig
}

// open type
export type OpenType = (content?: string | React.ReactNode, config?: OpenConfigType) => void