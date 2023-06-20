/** 侧边栏 */
import styles from './index.module.scss'
import { logo3 } from '~/config/imgUrl.config'
import { asideComponents } from '~/config/asideComponents.config'
import { useState, useEffect } from 'react'
import useLocalPath from '~/hooks/useLocalPath'
import { useNavigate } from 'react-router-dom'

const AsideBar = () => {

    const path = useLocalPath()
    const [asideIndex, setAsideIndex] = useState(-1)
    const navigate = useNavigate()

    useEffect(() => { 
        const index = asideComponents.findIndex(v => `/${v.route}` === path)
        if (index >= 0) {
            setAsideIndex(index)
        }
    }, [path])

    return <div className={styles.asidebar}>
        <header className={styles.aside_logo}>
            <div className={styles.logo_img}>
                <img src={logo3} alt="" />
            </div>
            <p className={styles.logo_text}>kk-activity3-ui</p>
        </header>
        <main className={styles.aside_main}>
            <ul className={styles.aside_ul}>
                {
                    asideComponents.map((v, i) => {
                        return <li key={i} className={`${styles.aside_li} ${asideIndex === i ? styles.active : ''}`}
                            onClick={() => {
                                setAsideIndex(i)
                                navigate(`/${v.route}`)
                            }}
                        >
                            <p className={styles.component_text}>
                                <span>{v.component}</span>
                                <span>{v.name}</span>
                            </p>
                        </li>
                    })
                }
            </ul>
        </main>
    </div>
}

export default AsideBar