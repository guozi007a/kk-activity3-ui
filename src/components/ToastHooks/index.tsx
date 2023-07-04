/** 上下文轻提示 hooks版轻提示 */
import Containers from './Containers'
import { useMemo, useCallback } from 'react'
import { ApiConfig, useNotifyListStore, POSITION, LIMITS, DURING, OpenType, RootConfigType } from './interface.config'

let uniqueKey = 0

const useToast = (rootConfig: RootConfigType = {}): [ApiConfig, React.ReactElement] => {

    const addNotify = useNotifyListStore(state => state.addNotify)

    const open = useCallback<OpenType>((content, config) => {

        const { type } = config

        addNotify({
            ...config,
            content,
            key: uniqueKey,
            operKey: uniqueKey,
            type
        })

        uniqueKey++
    }, [])

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
    }, [])

    const contextHolder = (
        <Containers
            limits={rootConfig.limits || api.config.limits}
        />
    )

    return [api, contextHolder]
}

export default useToast