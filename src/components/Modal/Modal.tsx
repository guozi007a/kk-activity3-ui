import styles from './modal.module.scss'
import AliIcon from '~/components/AliIcon'
import { useEffect } from 'react'

export interface ConfigType {
    maskVisible?: boolean, // 是否显示遮罩层
    maskClosable?: boolean, // 点击遮罩层是否关闭
    maskStyle?: React.CSSProperties, // 遮罩层自定义样式
    closeIcon?: string, // 自定义关闭按钮icon
    closeRender?: React.ReactNode, // 自定义关闭按钮
    closeVisible?: boolean, // 是否显示关闭按钮
    centered?: boolean, // 是否垂直居中显示对话框
    onOpen?: () => void, // 弹出框打开时的回调
    onClose?: () => void, // 弹出框关闭(销毁)时的回调
}

type PropType = {
    Comp?: React.ReactNode | React.FC
    closeFn: () => void
    config?: ConfigType
}

const Modal = ({
    Comp,
    closeFn,
    config,
}: PropType) => {

    const initConfig = {
        maskVisible: true,
        maskClosable: true,
        closeIcon: 'icon-close',
        closeVisible: true,
        centered: true,
    }
    config = { ...initConfig, ...config }

    useEffect(() => { 
        config?.onOpen && config.onOpen()

        return () => { 
            config?.onClose && config.onClose()
        }
    }, [])
    
    return <div className={styles.modal_wrap}>
        {
            config?.maskVisible
                ? <div className={styles.mask}
                    style={config?.maskStyle && config.maskStyle}
                    onClick={() => {
                        config?.maskClosable && closeFn()
                    }}
                ></div>
                : null
        }
        <div className={`${styles.content} ${config?.centered ? styles.centered : ''}`}>
            {
                config?.closeVisible
                    ? config?.closeRender
                        ? config.closeRender
                        : <div className={styles.modal_x}
                            onClick={closeFn}
                        >
                            <AliIcon icon={config?.closeIcon} />
                        </div>
                    : null
            }
            {
                Comp
                    ? typeof Comp === 'function'
                        ? <Comp />
                        : Comp
                    : null
            }
        </div>
    </div>
}

export default Modal