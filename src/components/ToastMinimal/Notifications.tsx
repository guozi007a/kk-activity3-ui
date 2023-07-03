/** 一组通知的容器 */
import styles from './notofications.module.scss'
import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import Notify from './Notify'
import { PositionObjType, NotifyProp, PositionsType } from './interface.config'
import { useNotifyList } from './notifyList'


const Notifications = () => {

    const [positionObj, setPositionObj] = useState<PositionObjType>({})
    const notifyList = useNotifyList(state => state.notifyList)

    useEffect(() => { 
        const clone = {} as PositionObjType
        notifyList?.forEach(v => {
            const place = v.position || 'center'
            if (clone[place]) {
                clone[place]!.push(v)
            } else {
                clone[place] = [v]
            }
        })
        setPositionObj(clone)
    }, [notifyList])

    return createPortal(
        <>
            {
                Object.keys(positionObj).map((v, i) => {
                    return <div key={i} className={`${styles.notifications} ${styles[v]}`}>
                        {
                            (positionObj[v as PositionsType] as NotifyProp[]).map((item) => {
                                return <Notify key={item.key} operKey={item.key} type={item.type} content={item.content} />
                            })
                        }
                    </div>
                })
            }
        </>,
        document.body
    )
}

export default Notifications