import { create } from "zustand"

// 默认挂载点
export const CONTAINER: HTMLElement = document.body

// 默认位置
export const POSITION = 'top'

// 默认类型
export const TYPE = 'default'

// 默认时长
export const DURING = 2

// 默认单个容器最多存放多少条通知
export const LIMITS = 3

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
    // 唯一标识
    key?: React.Key
    // 操作标识
    operKey?: React.Key
    // 类型
    type?: TypesConfig
    // 位置
    position?: PositionsType
    // 通知内容
    content?: ContentType
    // 持续时间
    during?: number
}

// 位置对象类型
export type PlacementsType = Partial<Record<PositionsType, NotifyProp[]>>

// 维护通知列表
export interface NotifyListStore {
    notifyList: NotifyProp[]
    addNotify: (notify: NotifyProp) => void
    delNotify: (key: React.Key) => void
    clearNotifyList: () => void
    setNotifyList: (notifyList?: NotifyProp[]) => void
}

export const useNotifyListStore = create<NotifyListStore>(set => ({
    // 通知列表，包含所有的通知
    notifyList: [],
    // 添加一个通知
    addNotify: (notify) => set(state => ({ notifyList: [...state.notifyList, notify] })),
    // 删除一个通知
    delNotify: (key) => set(state => ({ notifyList: state.notifyList.filter(config => config.key !== key) ?? [] })),
    // 清空通知列表
    clearNotifyList: () => set({ notifyList: [] }),
    // 设置通知列表
    setNotifyList: (notifyList) => set({ notifyList }),
}))

// api.config type
export interface ApiConfigType {
    during?: number
    position?: PositionsType
    // 每个容器最多包含多少条通知
    limits?: number
}

// api.func type
export type ApiFuncType = (content: string | React.ReactNode, config?: ApiConfigType) => void

// api config
export interface ApiConfig {
    config: ApiConfigType
    default: ApiFuncType
    info: ApiFuncType
    sc: ApiFuncType
    err: ApiFuncType
    warn: ApiFuncType
}

// open.config type
export interface OpenConfig extends ApiConfigType {
    type?: TypesConfig
}
// open type
export type OpenType = (content: string | React.ReactNode, config: OpenConfig) => void