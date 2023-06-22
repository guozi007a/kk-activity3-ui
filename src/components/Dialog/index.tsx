/** 弹框 */
import styles from './index.module.scss'
import AliIcon from '~/components/AliIcon'
import { createPortal } from 'react-dom'

type PropType = {
    // dialog content
    children?: React.ReactNode
    // is open dialog ? default false.
    isOpen?: boolean
    // method to close dialog
    onClose?: () => void
    // dialog will be closed when click mask ? default true
    isMaskClickEnable?: boolean
    // is show close icon ? default true
    isShowCloseIcon?: boolean
    // custom the close icon
    closeIcon?: string
}

const Dialog = ({
    children,
    isOpen,
    onClose,
    isMaskClickEnable = true,
    isShowCloseIcon = true,
    closeIcon = 'icon-close1'
}: PropType) => {

    const Portal = (
        <div className={styles.dialog}>
            <div className={styles.mask} onClick={() => {
                isMaskClickEnable && onClose && onClose()
            }}></div>
            <div className={styles.wrap}>
                {
                    isShowCloseIcon
                        ? <div className={styles.x} onClick={onClose}>
                            <AliIcon icon={closeIcon} />
                        </div>
                        : null
                }
                {children}
            </div>
        </div>
    )

    return <>
        {
            isOpen
                ? createPortal(Portal, document.body)
                : null
        }
    </>
}

export default Dialog