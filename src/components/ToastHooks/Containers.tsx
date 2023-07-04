/** 承载通知的容器s */
import styles from './containers.module.scss'
import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import { PlacementsType, PositionsType, useNotifyListStore, ContainerType } from './interface.config'
import Notify from './Notify'

const Containers = ({
    limits,
}: ContainerType) => {

    const notifyList = useNotifyListStore(state => state.notifyList)
    const clearNotifyList = useNotifyListStore(state => state.clearNotifyList)
    const [placements, setPlacements] = useState<PlacementsType>({})

    useEffect(() => { 
        const clone = { ...placements }
        notifyList.forEach(notify => {
            if (!clone[notify.position!]) {
                clone[notify.position!] = []
            }
        })
        Object.keys(clone).forEach(position => {
            const list = notifyList.filter(notify => notify.position === position) ?? []
            clone[position as PositionsType] = list.slice(- limits)
        })
        setPlacements(clone)
    }, [notifyList])

    useEffect(() => { 
        // 切换路由或退出浏览器时，清空通知列表
        return () => {
            clearNotifyList()
        }
    }, [])

    return createPortal(
        <>
            {
                Object.keys(placements).map((position) => {
                    return <div key={position} className={`${styles.containers} ${styles[position]}`}>
                        {
                            placements[position as PositionsType]!.map((config) => {
                                const { key, type, content, during } = config
                                return <Notify
                                    key={key}
                                    operKey={key}
                                    type={type}
                                    content={content}
                                    during={during}
                                />
                            })
                        }
                    </div>
                })
            }
        </>,
        document.body
    )
}

export default Containers