/** 组件总览 */
import styles from './index.module.scss'
import { TinyTitle1, TinyText, TinyTag, TinyGrid } from '~/components/Tinys'
import { viewComponents } from '~/config/allComponents.config'
import { useNavigate } from 'react-router-dom'

const OverView = () => {

    const navigate = useNavigate()

    return <div className={styles.overview}>
        <TinyTitle1 title='组件总览' />
        <TinyText>
            <TinyTag tag='kk-activity3-ui' />是在活动项目中积累的功能型组件，随着项目的持续深入，组件也会更加丰富。而且，随着对组件的应用和开发，在功能上会有更好的体验和更优秀的扩展性。欢迎小伙伴们在开发和使用中对该组件库提出改进意见和建议。
        </TinyText>
        <main className={styles.views}>
            <section className={styles.views_container}>
                <ul className={styles.views_ul}>
                    {
                        viewComponents.map((v, i) => {
                            return <li key={i} className={styles.views_li}
                                onClick={() => {navigate(`/${v.route}`)}}
                            >
                                <TinyGrid
                                    component={v.component}
                                    name={v.name}
                                    url={v.url}
                                />
                            </li>
                        })
                    }
                </ul>
            </section>
        </main>
    </div>
}

export default OverView