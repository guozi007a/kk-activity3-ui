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

/******************************** 类型 ************************************* */

// icons type
export interface IconsType {
    [name: string] : string
}

// Notify props type
export interface NotifyProp {
    // 通知类型
    type?: 'default' | 'info' | 'sc' | 'err' | 'warn'
    // 通知内容
    content?: string | React.ReactNode
    // 持续时间 单位s
    during?: number
}