/* 单条通知 */
import styles from './notify.module.scss'
import AliIcon from '~/components/AliIcon'
import { icons, NotifyProp } from './interface.config'
import { useEffect } from 'react'

const Notify = ({
    type,
    content,
    during = 2,
    dataKey,
    position = 'center',
}: NotifyProp) => {

    useEffect(() => {
        const timer = setTimeout(() => { 
            const toast = document.getElementById('__toast')
            if (toast && toast.dataset.dataKey === dataKey) {
                toast.remove()  
            }
        }, during * 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return <div className={`${styles.notify} ${styles[type || 'default']} ${styles[position]}`}>
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