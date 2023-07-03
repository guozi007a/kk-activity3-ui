/* 单条通知 */
import styles from './notify.module.scss'
import AliIcon from '~/components/AliIcon'
import { NotifyProp, icons } from './interface.config'

const Notify = ({ 
    type,
    content,
}: NotifyProp) => {
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