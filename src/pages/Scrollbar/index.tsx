/** 滚动条 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import ScrollbarC from '~/components/ScrollbarC'
import Controller from '~/components/Controller'

const Scrollbar = () => {
    return <div className={styles.scrollbar_wrap}>
        <Tiny.TinyTitle1 title='滚动条' />
        <Tiny.TinyText>当内容超过指定长度(或宽度)时，就需要使用滚动条。可定制滚动条样式。</Tiny.TinyText>
        <Tiny.TinyTitle2 title='前置提示' />
        <Tiny.TinyText>依赖库<Tiny.TinyTag tag='react-custom-scrollbars-2' />。</Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div className={styles.demo}>
            <ScrollbarC>
                <div className={styles.demo_main}>滚动吧，骚年！</div>
            </ScrollbarC>
        </div>
        <Tiny.TinyTitle2 title='控制器' />
        <Controller>
            <tbody>
                <tr>
                    <td>滚动区内容</td>
                    <td>children</td>
                    <td>React.ReactNode</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>自动隐藏滚动条</td>
                    <td>autoHide</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>隐藏动画持续时间</td>
                    <td>autoHideDuration</td>
                    <td>number</td>
                    <td>300</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>滚动条的宽度</td>
                    <td>thumbSize</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>滚动条style样式</td>
                    <td>thumbStyle</td>
                    <td>React.CSSProperties</td>
                    <td>null</td>
                    <td>-</td>
                </tr>
            </tbody>
        </Controller>
    </div>
}

export default Scrollbar