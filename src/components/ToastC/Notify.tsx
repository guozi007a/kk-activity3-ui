/** 单个轻提示结构组件 */
import styles from './notify.module.scss'
import AliIcon from '~/components/AliIcon'
import { toastTypes, icons, TypeConfig } from './toast.config'

interface NotifyType {
    content?: string | React.ReactNode
    type?: TypeConfig
}

const Notify = ({
    content = 'hello, i am a toast.',
    type = '',
}: NotifyType) => {
    return <div className={`${styles.notify} ${styles[type || 'default']}`}>
        {
            !type || type === 'default'
                ? null
                : <div className={styles.notify_icon}>
                    <AliIcon icon={type && toastTypes.includes(type) ? icons[type] : icons['default']} />
                </div>
        }
        <div className={styles.notify_content}>{content}</div>
    </div>
}

export default Notify