/** 一组通知的容器 */
import styles from './notofications.module.scss'
import { NotificationsProp } from './interface.config'

const Notifications = ({
    position,
    children,
}: NotificationsProp) => {
    return <div className={`${styles.notifications} ${styles[position || 'center']}`}>
        {children}
    </div>
}

export default Notifications