/** 全局提示 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import Notifications from '~/components/ToastMinimal/Notifications'
import Notify from '~/components/ToastMinimal/Notify'

const Toast = () => {
    return <div className={styles.toast}>
        <Tiny.TinyTitle1 title='全局轻提示' />
        <Tiny.TinyText>
            在项目中，点击按钮或调用接口时，会向用户提供活动开启、活动结束、活动进度、是否中奖、开奖奖励、金额不足、金额超限等提示。<br />
            这些提示通常调用<Tiny.TinyTag tag='toast' />方法来完成。该方法提供了默认、普通、成功、失败和警告等多种形式的轻提示。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <Notifications>
            <Notify content='hello, i am a small toast !' />
            <Notify type='sc' content='恭喜获得大逼兜一个！' />
            <Notify type='info'
                content='你好啊，我是activity3-ui'
            />
            <Notify type='err'
                content='支付失败，发送验证码无响应，请重试~'
            />
            <Notify type='warn'
                content='请勿重复点击~'
            />
        </Notifications>
        <Controller></Controller>
        <ViewCode />
    </div>
}

export default Toast