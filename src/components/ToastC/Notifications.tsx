/** 一组相同形式通知的容器 */
import styles from './notifications.module.scss'
import { createPortal } from 'react-dom'
import { NotificationsConfig } from './toast.config'
import Notify from './Notify'

const Notifications = ({
    container,
    position = 'center',
    type,
    // during = 1.5,
}: NotificationsConfig) => {

    if (!container) return
    
    return createPortal(
        <>
            <div className={`${styles.notifications} ${styles[position]}`}>
                <Notify
                    type={type}
                />
            </div>
        </>,
        container
    )
}

export default Notifications