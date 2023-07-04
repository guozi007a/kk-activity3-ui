/** 上下文轻提示 hooks版轻提示 */
import { ApiConfig, useNotifyListStore, PlacementsType, POSITION, PositionsType, LIMITS, DURING, OpenConfig } from './interface.config'

let uniqueKey = 0

const useToast = () => {

    const notifyList = useNotifyListStore(state => state.notifyList)
    const addNotify = useNotifyListStore(state => state.addNotify)

    const open: OpenConfig = (content, config) => {

        const { limits } = config

        // 先检查notifyList里面每个位置是否有超过最大条数限制的，如果有超出，就先删除超出部分
        const checkObj: PlacementsType = {}
        Object.keys(checkObj).forEach(position => {
            if (position === POSITION) {
                checkObj[position] = notifyList.filter(notify => !notify.position || notify.position === position)
            } else {
                checkObj[position as PositionsType] = notifyList.filter(notify => notify.position === position)
            }
        })
        for (const k in checkObj) {
            
        }
    }

    // api
    const api: ApiConfig = {
        config: {
            limits: LIMITS,
            position: POSITION,
            during: DURING
        },
        default(content, config) {
            open(content, { ...this.config, ...config })
        },
        info(content, config) {},
        sc(content, config) {},
        err(content, config) {},
        warn(content, config) {},
    }

    return [api]
}

export default useToast