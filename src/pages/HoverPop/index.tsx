/** 悬浮框 web端悬浮展示 手机端点击展示 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import HoverPopC from '~/components/HoverPopC'

const HoverPop = () => {
    return <div className={styles.hover_pop}>
        <Tiny.TinyTitle1 title='悬浮框' />
        <Tiny.TinyText>
            web端悬浮展示，手机端点击展示。通常用于展示礼物奖励、规则小提示等。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div className={styles.show_pop}>
            <HoverPopC />
        </div>
    </div>
}

export default HoverPop