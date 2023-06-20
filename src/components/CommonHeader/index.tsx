/** 通用头部栏 */
import styles from './index.module.scss'
import AliIcon from '~/components/AliIcon'

const CommonHeader = () => {
    return <header className={styles.common_header}>
        <div className={styles.sit}></div>
        <div className={styles.search}>
            <div className={styles.search_icon}>
                <AliIcon icon='icon-sousuo' />
            </div>
            <input type="text" placeholder='收入关键字搜索..' className={styles.search_inp} />
        </div>
        <a href="https://github.com/guozi007a/kk-activity3-ui" target='_blank' className={styles.link} title='to github'>
            <AliIcon icon='icon-github' />
        </a>
    </header>
}

export default CommonHeader