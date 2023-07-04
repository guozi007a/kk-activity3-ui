/** 单条通知 */
import styles from './notify.module.scss'
import AliIcon from '~/components/AliIcon'
import { NotifyProp, icons, useNotifyListStore } from './interface.config'
import { useEffect } from 'react'

const Notify = ({
    type,
    content,
    during,
    operKey,
    position,
    limits,
}: NotifyProp) => {

    const notifyList = useNotifyListStore(state => state.notifyList)
    const delNotify = useNotifyListStore(state => state.delNotify)

    useEffect(() => { 
        const timer = setTimeout(() => { 
            const list = notifyList.filter(notify => notify.position === position)
            if (list.length > limits!) {
                
            }

            delNotify(operKey!)
        }, during! * 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [during])

    return <div className={`${styles.notify} ${styles[type || 'default']}`}>
        {
            typeof content === 'string'
                ? <>
                    {
                        type === 'default' || !type
                            ? null
                            : <div className={styles.type_icon}>
                                <AliIcon icon={icons[type]} />
                            </div>
                    }
                    <span>{content}</span>
                </>
                : content
        }
    </div>
}

export default Notify