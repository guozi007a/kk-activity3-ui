/** 基础路由 */
import styles from './index.module.scss'
import AsideBar from '~/components/AsideBar'
import CommonHeader from '~/components/CommonHeader'

const Basic = () => {
    return <div className={styles.basic}>
        <AsideBar />
        <main className={styles.basic_main}>
            <CommonHeader />
            <section className={styles.basic_container}></section>
        </main>
    </div>
}

export default Basic