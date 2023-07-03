/** 一组通知的容器 */
import styles from './notofications.module.scss'
import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import Notify from './Notify'
import { NotificationsProp, PositionObjType, NotifyProp, PositionsType } from './interface.config'

const Notifications = ({
    position,
}: NotificationsProp) => {

    const [notifyList, setNotifyList] = useState<NotifyProp[]>([])
    const [positionObj, setPositionObj] = useState<PositionObjType>({})

    useEffect(() => { 
        setPositionObj({
            top: [
                { content: 'hello, i am a small toast !' },
                { type: 'err', content: '支付失败，发送验证码无响应，请重试~' },
            ],
            center: [
                { type: 'sc', content: '恭喜获得大逼兜一个！' },
                { type: 'warn', content: '请勿重复点击~' },
            ],
            bottom: [
                { type: 'info', content: '你好啊，我是activity3-ui' }
            ],
        })
    }, [])

    // return <div className={`${styles.notifications} ${styles[position || 'center']}`}>
        
    // </div>
    return createPortal(
        <>
            {
                Object.keys(positionObj).map((v, i) => {
                    return <div key={i} className={`${styles.notifications} ${styles[v]}`}>
                        {
                            (positionObj[v as PositionsType] as NotifyProp[]).map((item, index) => {
                                return <Notify key={index} type={item.type} content={item.content} />
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