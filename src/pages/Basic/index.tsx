/** 基础路由 */
import styles from './index.module.scss'
import AsideBar from '~/components/AsideBar'
import CommonHeader from '~/components/CommonHeader'
import { Outlet } from 'react-router-dom'

const Basic = () => {
    return <div className={styles.basic}>
        <AsideBar />
        <main className={styles.basic_main}>
            <CommonHeader />
            <section className={styles.basic_container}>
                <Outlet />
            </section>
        </main>
    </div>
}

export default Basic