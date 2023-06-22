/** 弹窗 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Dialog from '~/components/Dialog'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useState } from 'react'

const Popup = () => {

    const [isVisible, setIsVisible] = useState(false)

    const handleOpen = () => {
        setIsVisible(true)
    }
    const handleClose = () => {
        setIsVisible(false)
    }

    return <div className={styles.popup}>
        <Scrollbars autoHide>
            <Tiny.TinyTitle1 title='弹出框' />
            <Tiny.TinyText>
                以弹框的形式展示有效内容，比如规则内容、排行榜列表、抽奖奖励等常见的弹框展现内容。
            </Tiny.TinyText>
            <Tiny.TinyTitle2 title='何时使用' />
            <Tiny.TinyText>
                点击按钮打开或通过通过某些接口条件进行展示。
            </Tiny.TinyText>
            <Tiny.TinyTitle2 title='效果展示' />
            <button className={styles.btn} onClick={handleOpen}>打开弹出框</button>
            <Tiny.TinyTitle2 title='控制器' />
            <div className={styles.controller}></div>
        </Scrollbars>
        <Dialog
            isOpen={isVisible}
            onClose={handleClose}
        >
            <div className={styles.cont}>
                <Tiny.TinyTitle2 title='欢迎使用Dialog ！' />
            </div>
        </Dialog>
    </div>
}

export default Popup