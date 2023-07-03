/** 类型和数据 */

// 通知类型
export const types = ['default', 'info', 'sc', 'err', 'warn']

// 通知类型的类型
export type TypesConfig = 'default' | 'info' | 'sc' | 'err' | 'warn'

// 通知位置
export type PositionConfig = 'top' | 'center' | 'bottom'

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