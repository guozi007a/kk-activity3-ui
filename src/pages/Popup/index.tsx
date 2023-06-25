/** 弹窗 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Dialog from '~/components/Dialog'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useState } from 'react'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import { popupCodes } from '~/config/popupCodes'

const Popup = () => {

    const [isVisible, setIsVisible] = useState(false)
    const [isMaskEnable, setIsMaskEnable] = useState(true)
    const [isShowCloseIcon, setIsShowCloseIcon] = useState(true)

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
            <Controller>
                <tbody>
                    <tr>
                        <td>点击遮罩是否关闭弹框</td>
                        <td>isMaskClickEnable</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>
                            <label htmlFor="mask1">
                                <input type="radio" name='mask' id='mask1' checked={isMaskEnable}
                                    onChange={() => {setIsMaskEnable(true)}}
                                />
                                <span>是</span>
                            </label>
                            <label htmlFor="mask2">
                                <input type="radio" name='mask' id='mask2' checked={!isMaskEnable}
                                    onChange={() => {setIsMaskEnable(false)}}
                                />
                                <span>否</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>是否显示关闭按钮</td>
                        <td>isShowCloseIcon</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>
                            <label htmlFor="closeicon1">
                                <input type="radio" name='closeicon' id='closeicon1' checked={isShowCloseIcon}
                                    onChange={() => {setIsShowCloseIcon(true)}}
                                />
                                <span>是</span>
                            </label>
                            <label htmlFor="closeicon2">
                                <input type="radio" name='closeicon' id='closeicon2' checked={!isShowCloseIcon}
                                    onChange={() => {setIsShowCloseIcon(false)}}
                                />
                                <span>否</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>按钮图标</td>
                        <td>closeIcon</td>
                        <td>string</td>
                        <td>'icon-close1'</td>
                    </tr>
                </tbody>
            </Controller>
            <ViewCode codes={popupCodes} />
        </Scrollbars>
        <Dialog
            isOpen={isVisible}
            onClose={handleClose}
            isMaskClickEnable={isMaskEnable}
            isShowCloseIcon={isShowCloseIcon}
        >
            <div className={styles.cont}>
                <Tiny.TinyTitle2 title='欢迎使用Dialog ！' />
            </div>
        </Dialog>
    </div>
}

export default Popup