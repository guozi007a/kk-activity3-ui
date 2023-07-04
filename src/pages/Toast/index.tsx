/** 轻提示 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import { toast, showToast } from '~/components/ToastGlobal'
import useToast from '~/components/ToastHooks'

const Toast = () => {

    const [api, contextHolder] = useToast()

    return <div className={styles.toast}>
        <Tiny.TinyTitle1 title='轻提示' />
        <Tiny.TinyText>
            在项目中，点击按钮或调用接口时，会向用户提供活动开启、活动结束、活动进度、是否中奖、开奖奖励、金额不足、金额超限等提示。<br />
            这些提示通常调用<Tiny.TinyTag tag='toast' />方法或者默认的<Tiny.TinyTag tag='showToast' />方法来完成。<Tiny.TinyTag tag='toast' />方法提供了默认、普通、成功、失败和警告等多种类型，以及顶部、居中和底部等多种位置的轻提示。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='全局轻提示' />
        <Tiny.TinyText>
            全局轻提示是相对于<Tiny.TinyTag tag='hooks' />版本的上下文轻提示而言的。它没有独立容器，每个提示单独在<Tiny.TinyTag tag='body' />中加载。
        </Tiny.TinyText>
        <Tiny.TinyText>
            每次生成新的提示前，会先卸载旧的提示，互不干扰。特点是，不管怎么切换路由，总是能看到轻提示。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div className={styles.btns}>
            <button onClick={() => { toast.default('顶部，默认提示', { position: 'top' }) }}>top default</button>
            <button onClick={() => { toast.info('顶部，普通提示', { position: 'top' }) }}>top info</button>
            <button onClick={() => { toast.sc('顶部，成功提示', { position: 'top' }) }}>top success</button>
            <button onClick={() => { toast.err('顶部，错误提示', { position: 'top' }) }}>top error</button>
            <button onClick={() => { toast.warn('顶部，警告提示', { position: 'top' }) }}>top warn</button>
            <button onClick={() => { showToast('恭喜你获得一个大逼兜！') }}>showToast</button>
            <button onClick={() => { toast.default('居中，默认提示') }}>center default</button>
            <button onClick={() => { toast.info('居中，普通提示') }}>center info</button>
            <button onClick={() => { toast.sc('居中，成功提示') }}>center success</button>
            <button onClick={() => { toast.err('居中，错误提示') }}>center error</button>
            <button onClick={() => { toast.warn('居中，警告提示') }}>center warn</button>
            <button onClick={() => { toast.default('底部，默认提示', { position: 'bottom' }) }}>bottom default</button>
            <button onClick={() => { toast.info('底部，普通提示', { position: 'bottom' }) }}>bottom info</button>
            <button onClick={() => { toast.sc('底部，成功提示', { position: 'bottom' }) }}>bottom success</button>
            <button onClick={() => { toast.err('底部，错误提示', { position: 'bottom' }) }}>bottom error</button>
            <button onClick={() => { toast.warn('底部，警告提示', { position: 'bottom' }) }}>bottom warn</button>
        </div>
        <Tiny.TinyTitle2 title='上下文轻提示' />
        <Tiny.TinyText>
            相对于全局提示来说，上下文轻提示主要特点在于它调用了上下文的<Tiny.TinyTag tag='contextHolder' />，只显示在当前页面，切换路由，就不会显示该提示。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        { contextHolder }
        <div className={styles.btns}>
        <button onClick={() => { api.default('顶部，默认提示') }}>top default</button>
            <button onClick={() => { api.info('顶部，普通提示') }}>top info</button>
            <button onClick={() => { api.sc('顶部，成功提示') }}>top success</button>
            <button onClick={() => { api.err('顶部，错误提示') }}>top error</button>
            <button onClick={() => { api.warn('顶部，警告提示') }}>top warn</button>
            <button onClick={() => { api.default('居中，默认提示', { position: 'center' }) }}>center default</button>
            <button onClick={() => { api.info('居中，普通提示', { position: 'center' }) }}>center info</button>
            <button onClick={() => { api.sc('居中，成功提示', { position: 'center' }) }}>center success</button>
            <button onClick={() => { api.err('居中，错误提示', { position: 'center' }) }}>center error</button>
            <button onClick={() => { api.warn('居中，警告提示', { position: 'center' }) }}>center warn</button>
            <button onClick={() => { api.default('底部，默认提示', { position: 'bottom' }) }}>bottom default</button>
            <button onClick={() => { api.info('底部，普通提示', { position: 'bottom' }) }}>bottom info</button>
            <button onClick={() => { api.sc('底部，成功提示', { position: 'bottom' }) }}>bottom success</button>
            <button onClick={() => { api.err('底部，错误提示', { position: 'bottom' }) }}>bottom error</button>
            <button onClick={() => { api.warn('底部，警告提示', { position: 'bottom' }) }}>bottom warn</button>
        </div>
    </div>
}

export default Toast