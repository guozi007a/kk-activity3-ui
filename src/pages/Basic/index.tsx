/** 基础路由 */
import styles from './index.module.scss'
import AsideBar from '~/components/AsideBar'
import CommonHeader from '~/components/CommonHeader'
import { Outlet } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2'

const Basic = () => {
    return <div className={styles.basic}>
        <AsideBar />
        <main className={styles.basic_main}>
            <CommonHeader />
            <section className={styles.basic_container}>
                <div className={styles.basic_inner}>
                    <Scrollbars autoHide>
                        <Outlet />
                    </Scrollbars>
                </div>
            </section>
        </main>
    </div>
}

export default Basic