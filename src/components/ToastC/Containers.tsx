/** 一组相同位置通知的容器 */
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './containers.module.scss'
import Notify from './Notify'
import { ContainersProp, defaultPosition, OpenType, positions, PositionType, PositionObjType, defaultContainer } from './interface.config'

let uniqueKey = 0

const Containers = ({
    position = defaultPosition,
    getAPI
}: ContainersProp) => {

    const [noticeList, setNoticeList] = useState<OpenType[]>([])
    const [positionObj, setPositionObj] = useState<PositionObjType>({})

    const open = (config?: OpenType) => {
        console.log('open is exec...')
        console.log('config: ', config)
        if (config) {
            config.key = uniqueKey
            console.log([...noticeList, config])
            setNoticeList([...noticeList, config])
            uniqueKey++
            console.log('noticeList: ', noticeList)
        }
    }

    useEffect(() => { 
        console.log('@@')
        getAPI && getAPI({
            open
        })
    }, [noticeList])

    return createPortal(
        <div className={`${styles.containers} ${styles[position || defaultPosition]}`}>
            {
                noticeList.map((config) => {
                    const { key, type, content } = config
                    return <Notify
                        key={key}
                        type={type}
                        content={content}
                    />
                })
            }
        </div>
        ,
        defaultContainer
    )
}

export default Containers