/** 数据和类型 */

// 通知容器的位置
export const positions = ['top', 'center', 'bottom']

// 位置类型
export type PositionsType = 'top' | 'center' | 'bottom'

// 容器类型
export interface NotificationsProp {
    position?: PositionsType
}

// 通知类型
export const types = ['default', 'info', 'sc', 'err', 'warn']

// 通知类型的类型
export type TypesConfig = 'default' | 'info' | 'sc' | 'err' | 'warn'

// Notify props
export interface NotifyProp {
    // 类型
    type?: TypesConfig
    // 内容
    content?: string | React.ReactNode
    // 位置
    position?: PositionsType
}

// icon类型
export type IconsType = Partial<Record<TypesConfig, string>>

// 通知类型和对应的icon
export const icons: IconsType = {
    default: '',
    info: 'icon-xiaoxi',
    sc: 'icon-chenggong',
    err: 'icon-shibai',
    warn: 'icon-jinggao_tixing',
}

// 位置对象 对应每个容器
export type PositionObjType = Partial<Record<PositionsType, NotifyProp[]>>
