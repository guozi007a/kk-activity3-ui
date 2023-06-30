/** 类型和数据 */

/********************************** 数据 ************************************** */

// 默认挂载点
export const defaultContainer: HTMLElement = document.body

// 通知显示位置
export const positions = ['top', 'center', 'bottom']

// 通知类型 default--默认 info--普通 sc--成功 err-失败 warn--警告
export const noticeType = ['default', 'info', 'sc', 'err', 'warn']

// 通知类型和对应的icon
export const icons: IconsType = {
    default: '',
    info: 'icon-xiaoxi',
    sc: 'icon-chenggong',
    err: 'icon-shibai',
    warn: 'icon-jinggao_tixing',
}

// 默认类型
export const defaultType = 'default'

// 默认持续时间 1.5s
export const defaultDuring = 1.5

// 默认容器位置
export const defaultPosition = 'center'

/******************************** 类型 ************************************* */

// icons type
export type IconsType = Partial<Record<TypeConfig, string>>

// Notify type config
export type TypeConfig = 'default' | 'info' | 'sc' | 'err' | 'warn'

// Notify props type
export interface NotifyProp {
    // 通知类型
    type?: TypeConfig
    // 通知内容
    content?: string | React.ReactNode
    // 持续时间 单位s
    during?: number
}

// position type
export type PositionType = 'top' | 'center' | 'bottom'

// Containers props type
export interface ContainersProp {
    // 容器位置
    position?: PositionType
    // test info type
    getAPI?: (api: {}) => void
}

// position obj type
export type PositionObjType = Partial<Record<PositionType, []>>

// 增加一条通知
export interface OpenType extends NotifyProp {
    // 唯一标识
    key: React.Key
    // 位置
    position?: PositionType
}


/********************************* test ************************************* */
