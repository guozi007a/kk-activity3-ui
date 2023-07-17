/** 通用头部栏 */
import styles from './index.module.scss'
import AliIcon from '~/components/AliIcon'
import { KK_UI_USER_INFO, defaultAvatar } from '~/utils/kkUtils'
import { useNavigate } from 'react-router-dom'
import { TinyButton } from '~/components/Tinys'

const CommonHeader = () => {

    const userInfo = localStorage.getItem(KK_UI_USER_INFO) ? JSON.parse(localStorage.getItem(KK_UI_USER_INFO) || "{}") : {}
    const navigate = useNavigate()

    return <header className={styles.common_header}>
        <div className={styles.sit}></div>
        <div className={styles.search}>
            <div className={styles.search_icon}>
                <AliIcon icon='icon-sousuo' />
            </div>
            <input type="text" placeholder='输入关键字搜索..' className={styles.search_inp} />
        </div>
        <div className={styles.right}>
            <a href="https://github.com/guozi007a/kk-activity3-ui" target='_blank' className={styles.link} title='to github'>
                <AliIcon icon='icon-github' />
            </a>
            {
                localStorage.getItem(KK_UI_USER_INFO)
                    ? <div className={styles.avatar}>
                        <img src={userInfo.avatar_url || defaultAvatar} alt="" />
                        <div className={styles.hover_profile}>
                            <div className={styles.logout}
                                onClick={() => {
                                    fetch("/logout")
                                        .then(res => res.json())
                                        .then((data) => {
                                            console.log(data)
                                            if (data.data) {
                                                localStorage.removeItem(KK_UI_USER_INFO)
                                                navigate('/', { replace: true })
                                            }
                                        })
                                        .catch(err => console.log(err))
                                }}
                            >退出登录</div>
                        </div>
                    </div>
                    : <TinyButton
                        onClick={() => {
                            navigate('/login')
                        }}
                    >登 录</TinyButton>
            }
        </div>
    </header>
}

export default CommonHeader