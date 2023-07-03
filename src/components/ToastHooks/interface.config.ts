// 位置
export const positions = ['top', 'center', 'bottom']

// 位置类型
export type PositionsType = 'top' | 'center' | 'bottom'

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

// 通知内容类型
export type ContentType = string | React.ReactNode

// Notify props
export interface NotifyProp {
    // 类型
    type?: TypesConfig
    // 位置
    position?: PositionsType
    // 通知内容
    content?: ContentType
}