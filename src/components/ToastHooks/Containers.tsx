/** 承载通知的容器s */
import styles from './containers.module.scss'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import { PlacementsType, PositionsType } from './interface.config'
import Notify from './Notify'

const Containers = () => {

    const [placements, setPlacements] = useState<PlacementsType>({})

    return createPortal(
        <>
            {
                Object.keys(placements).map((position) => {
                    return <div key={position} className={`${styles.containers} ${styles[position]}`}>
                        {
                            placements[position as PositionsType]!.map((config) => {
                                return <Notify
                                    key={config.key}
                                    operKey={config.key}
                                    type={config.type}
                                    content={config.content}
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