/* 单条通知 */
import styles from './notify.module.scss'
import { NotifyProp } from './interface.config'

const Notify = ({ 
    type,
    content,
}: NotifyProp) => {
    return <div className={`${styles.notify} ${styles[type || 'default']}`}>
        {content}
    </div>
}

export default Notify