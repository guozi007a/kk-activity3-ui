/** 一组相同位置通知的容器 */
import { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './containers.module.scss'
import Notify from './Notify'
import { ContainersProp, defaultPosition, TypeConfig, OpenType } from './interface.config'

let uniqueKey = 0

const Containers = ({
    position = defaultPosition,
}: ContainersProp) => {

    const [noticeList, setNoticeList] = useState<OpenType[]>([])

    const open = (config?: OpenType) => {
        if (config) {
            config.key = uniqueKey
            setNoticeList([...noticeList, config])
            uniqueKey++
        }
    }

    return <div className={`${styles.containers} ${styles[position || defaultPosition]}`}>
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
}

export default Containers