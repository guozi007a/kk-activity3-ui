/** 滚动条 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import ScrollbarC from '~/components/ScrollbarC'

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
    </div>
}

export default Scrollbar