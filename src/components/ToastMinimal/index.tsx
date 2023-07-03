/** toast 轻提示*/
import { useNotifyList } from "./notifyList";
import { NotifyProp, TypesConfig, positions, PositionsType } from './interface.config'
import { useEffect } from "react";
import Notifications from "./Notifications";

let uniqueKey = 0
const LIMITS = 3

type TaskType = (content?: string | React.ReactNode, config?: NotifyProp) => void

type ToastTaskType = Partial<Record<TypesConfig, TaskType>>

type OpenType = (type: TypesConfig, content?: string | React.ReactNode, config?: NotifyProp) => void

const useToast = () => {

    const notifyList = useNotifyList(state => state.notifyList)
    const addNotify = useNotifyList(state => state.addNotify)
    const setSyncNotifys = useNotifyList(state => state.setSyncNotifys)
    const clearNotifys = useNotifyList(state => state.clearNotifys)

    const open: OpenType = (type, content, config) => {
        // 检查同一个位置是否超过最大条数 超出的就删除多余的
        const placement = {
            top: [] as NotifyProp[],
            center: [] as NotifyProp[],
            bottom: [] as NotifyProp[]
        }
        notifyList?.forEach(v => {
            placement[v.position || 'center'].push(v)
        })
        positions.forEach(v => {
            if (placement[v as PositionsType].length >= LIMITS) {
                if (config?.position === v || (v === 'center' && !config?.position)) {
                    placement[v] = placement[v].slice(1 - LIMITS)
                } else {
                    placement[v as PositionsType] = placement[v as PositionsType].slice(-LIMITS)
                }
            }
        })
        const list = positions.map(v => {
            return placement[v as PositionsType]
        })
        setSyncNotifys!(list.flat())

        addNotify!({
            type,
            ...config,
            content,
            key: uniqueKey
        })
        uniqueKey++
    }

    const toast: ToastTaskType = {
        default: (content, config) => {
            open('default', content, config)
        },
        info: (content, config) => {
            open('info', content, config)
        },
        sc: (content, config) => {
            open('sc', content, config)
        },
        err: (content, config) => {
            open('err', content, config)
        },
        warn: (content, config) => {
            open('warn', content, config)
        },
    }

    const contextHolder = (<Notifications />)

    useEffect(() => { 
        return () => {
            clearNotifys?.()
        }
    }, [])

    return [toast, contextHolder]
}

export default useToast