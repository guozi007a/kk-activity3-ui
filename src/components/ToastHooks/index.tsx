/** 上下文轻提示 hooks版轻提示 */
import Containers from './Containers'
import { useMemo } from 'react'
import { ApiConfig, useNotifyListStore, POSITION, LIMITS, DURING, OpenType } from './interface.config'

let uniqueKey = 0

const useToast = (): [ApiConfig, React.ReactElement] => {

    const notifyList = useNotifyListStore(state => state.notifyList)
    const addNotify = useNotifyListStore(state => state.addNotify)
    const delNotify = useNotifyListStore(state => state.delNotify)

    const open: OpenType = (content, config) => {

        const { limits, position, type } = config

        // 先检查一下，要添加通知的那个容器是否超限，如果超限就清除旧的通知
        console.log('notifyList--open: ', notifyList)
        const list = notifyList.filter(notify => notify.position === position) ?? []
        console.log('list: ', list)
        if (list.length >= limits!) {
            delNotify(list[0].key!)
        }

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
                open(content, { ...this.config, ...config, type: 'default' })
            },
            info(content, config) {
                open(content, { ...this.config, ...config, type: 'info' })
            },
            sc(content, config) {
                open(content, { ...this.config, ...config, type: 'sc' })
            },
            err(content, config) {
                open(content, { ...this.config, ...config, type: 'err' })
            },
            warn(content, config) {
                open(content, { ...this.config, ...config, type: 'warn' })
            },
        }
    }, [])

    const contextHolder = (<Containers />)

    return [api, contextHolder]
}

export default useToast