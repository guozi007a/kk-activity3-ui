/** 单条通知 */
import AliIcon from '~/components/AliIcon'
import styles from './notify.module.scss'
import { NotifyProp, icons } from './interface.config'

const Notify = ({
    type,
    content,
    // during,
}: NotifyProp) => { 
    return <div className={`${styles.notify} ${type ? styles[type] : styles['default']}`}>
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