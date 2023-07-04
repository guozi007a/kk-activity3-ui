/** 上下文轻提示 hooks版轻提示 */
import Containers from './Containers'
import { useMemo } from 'react'
import { ApiConfig, useNotifyListStore, POSITION, LIMITS, DURING, OpenType, RootConfigType } from './interface.config'

let uniqueKey = 0

const useToast = (rootConfig: RootConfigType = {}): [ApiConfig, React.ReactElement] => {

    const notifyList = useNotifyListStore(state => state.notifyList)
    const addNotify = useNotifyListStore(state => state.addNotify)
    const setNotifyList = useNotifyListStore(state => state.setNotifyList)

    const open: OpenType = (content, config) => {

        const { type, position, limits } = config

        // 每次向容器内添加新的通知前，都更新一次列表
        // 如果向指定的position容器内添加通知，则该容器内最多只保留limits - 1条通知
        // 以便为新的通知预留位置
        const list = notifyList.filter(notify => notify.position === position) ?? []
        const others = notifyList.filter(notify => notify.position !== position) ?? []
        setNotifyList([...others, ...list.slice(1 - limits)])

        addNotify({
            ...config,
            content,
            key: uniqueKey,
            operKey: uniqueKey,
            type
        })

        uniqueKey++
    }

    // api
    const api = useMemo<ApiConfig>(() => { 
        return {
            config: {
                limits: LIMITS,
                position: POSITION,
                during: DURING
            },
            default(content, config) {
                open(content, { ...this.config, ...rootConfig, ...config, type: 'default' })
            },
            info(content, config) {
                open(content, { ...this.config, ...rootConfig, ...config, type: 'info' })
            },
            sc(content, config) {
                open(content, { ...this.config, ...rootConfig, ...config, type: 'sc' })
            },
            err(content, config) {
                open(content, { ...this.config, ...rootConfig, ...config, type: 'err' })
            },
            warn(content, config) {
                open(content, { ...this.config, ...rootConfig, ...config, type: 'warn' })
            },
        }
    }, [notifyList]) // 此处必须加入notifyList变量，不然无法获取新的通知列表

    const contextHolder = (
        <Containers />
    )

    return [api, contextHolder]
}

export default useToast