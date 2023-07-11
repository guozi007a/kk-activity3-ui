/** 登录页 */
import styles from './index.module.scss'
import { logo1 } from '~/config/imgUrl.config'
import { useId } from 'react'
import AliIcon from '~/components/AliIcon'

const Login = () => {

    const laborId = useId()
    const nameId = useId()

    return <div className={styles.login}>
        {/* <Tiny.TinyButton>
            <a href="/login/github">Github登录</a>
        </Tiny.TinyButton> */}
        <div className={styles.logo}>
            <img src={logo1} alt="" />
        </div>
        <label htmlFor={laborId}>
            <span>工号：</span>
            <input type="text"
                placeholder='你的工号'
                id={laborId}
                className={styles.labor}
            />
        </label>
        <label htmlFor={nameId}>
            <span>姓名：</span>
            <input type="text"
                placeholder='你的姓名'
                id={nameId}
                className={styles.yourname}
            />
        </label>
        <button className={styles.submit}>登录</button>
        <div className={styles.line}></div>
        <p className={styles.third}>使用第三方登录</p>
        <footer className={styles.third_footer}>
            <a href='/login/github' className={styles.github_icon} title='Github登录'>
                <AliIcon icon='icon-github1' />
            </a>
            <a href='/login/gitee' className={styles.gitee_icon} title='Gitee登录'>
                <AliIcon icon='icon-gitee' />
            </a>
        </footer>
    </div>
}

export default Login