/** 登录页 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'

const Login = () => {
    return <div className={styles.login}>
        <Tiny.TinyButton>Github登录</Tiny.TinyButton>
    </div>
}

export default Login