/** 登录页 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'

const Login = () => {

    return <div className={styles.login}>
        <Tiny.TinyButton>
            <a href="https://github.com/login/oauth/authorize?scope=user&client_id=95a6cf45f087a9b6dbe2&state=big_deal">Github登录</a>
        </Tiny.TinyButton>
    </div>
}

export default Login