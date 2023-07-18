/** 通用头部栏 */
import styles from './index.module.scss'
import AliIcon from '~/components/AliIcon'
import { useNavigate } from 'react-router-dom'
import { TinyButton } from '~/components/Tinys'
import { useEffect } from 'react'
import { useInfoStore } from '~/store/useInfoStore'

const CommonHeader = () => {

    const navigate = useNavigate()
    const userInfo = useInfoStore(state => state.userInfo)
    const setUserInfo = useInfoStore(state => state.setUserInfo)

    useEffect(() => { 
        fetch('/user', {
            credentials: 'include',
        })
        .then(res => res.json())
            .then(data => {
                setUserInfo({...data.data, isRefresh: true})
            })
            .catch(err => console.log(err))
    }, [])

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
                userInfo.username
                    ? <div className={styles.avatar}>
                        <img src={userInfo.avatar_url} alt="" />
                        <ul className={styles.hover_profile}>
                            <li className={`${styles.info_item} ${styles.nickname}`}>hi, {userInfo.username} !</li>
                            <li className={`${styles.info_item} ${styles.logout}`}
                                onClick={() => {
                                    fetch("/logout")
                                        .then(res => res.json())
                                        .then((data) => {
                                            if (data.data) {
                                                navigate('/', { replace: true })
                                                setUserInfo()
                                            }
                                        })
                                        .catch(err => console.log(err))
                                }}
                            >退出登录</li>
                        </ul>
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