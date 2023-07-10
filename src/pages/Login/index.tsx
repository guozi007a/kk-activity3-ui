/** 登录页 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import { logo1 } from '~/config/imgUrl.config'
import { useId } from 'react'

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
        <div className={styles.line}></div>
        <p className={styles.third}>三方登录：</p>
    </div>
}

export default Login