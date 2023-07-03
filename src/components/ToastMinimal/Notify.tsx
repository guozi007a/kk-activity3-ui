/* 单条通知 */
import styles from './notify.module.scss'
import AliIcon from '~/components/AliIcon'
import { NotifyProp, icons } from './interface.config'
import { useEffect } from 'react'
import { useNotifyList } from './notifyList'

const during = 2

const Notify = ({ 
    type,
    content,
    operKey,
}: NotifyProp) => {

    const notifyList = useNotifyList(state => state.notifyList)
    const delNotify = useNotifyList(state => state.delNotify)

    useEffect(() => { 
        const timer = setTimeout(() => { 
            if (notifyList?.some(v => v.key === operKey)) {
                delNotify!(operKey as React.Key)
            }
        }, during * 1000)
        return () => {
            clearTimeout(timer)
        }
    } ,[])

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