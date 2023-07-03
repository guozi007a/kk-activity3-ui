/** 全局提示 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import useToast from '~/components/ToastMinimal'

const Toast = () => {

    const [toast, contextHolder] = useToast()

    return <div className={styles.toast}>
        <Tiny.TinyTitle1 title='全局轻提示' />
        <Tiny.TinyText>
            在项目中，点击按钮或调用接口时，会向用户提供活动开启、活动结束、活动进度、是否中奖、开奖奖励、金额不足、金额超限等提示。<br />
            这些提示通常调用<Tiny.TinyTag tag='toast' />方法来完成。该方法提供了默认、普通、成功、失败和警告等多种形式的轻提示。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        {contextHolder}
        <button onClick={() => {toast?.default!('hello, i am a small toast')}}>点击1</button>
        <button onClick={() => { toast.info!('hello, i am a small toast', { position: 'top' }) }}>点击2</button>
        <button onClick={() => { toast.sc!('hello, i am a small toast', { position: 'bottom' }) }}>点击3</button>
        <button onClick={() => { toast.err!('hello, i am a small toast') }}>点击4</button>
        <button onClick={() => { toast.warn!('hello, i am a small toast') }}>点击5</button>
        <Controller></Controller>
        <ViewCode />
    </div>
}

export default Toast