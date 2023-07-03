/** 轻提示 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import { toast, showToast } from '~/components/ToastGlobal'

toast.config = {
    position: 'top'
}

const Toast = () => {

    return <div className={styles.toast}>
        <Tiny.TinyTitle1 title='轻提示' />
        <Tiny.TinyText>
            在项目中，点击按钮或调用接口时，会向用户提供活动开启、活动结束、活动进度、是否中奖、开奖奖励、金额不足、金额超限等提示。<br />
            这些提示通常调用<Tiny.TinyTag tag='toast' />方法来完成。该方法提供了默认、普通、成功、失败和警告等多种形式的轻提示。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
    </div>
}

export default Toast