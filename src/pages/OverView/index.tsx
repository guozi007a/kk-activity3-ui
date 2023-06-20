/** 组件总览 */
import styles from './index.module.scss'
import { TinyTitle1, TinyText, TinyTag, TinyGrid } from '~/components/Tinys'
import { viewComponents } from '~/config/allComponents.config'
import { useNavigate } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2'

const OverView = () => {

    const navigate = useNavigate()

    return <div className={styles.overview}>
        <TinyTitle1 title='组件总览' />
        <TinyText>
            <TinyTag tag='kk-activity3-ui' />是在活动项目中积累的功能型组件，随着项目的持续深入，组件也会更加丰富。而且，随着对组件的应用和开发，在功能上会有更好的体验和更优秀的扩展性。欢迎小伙伴们在开发和使用中对该组件库提出改进意见和建议。
        </TinyText>
        <TinyText>
            本网站采用响应式布局，在<TinyTag tag='Web' />和<TinyTag tag='Mobile' />设备均可使用。页面用于展示组件的参数及应用方法，供设计和开发人员参考使用。
        </TinyText>
        <main className={styles.views}>
            <section className={styles.views_container}>
                <Scrollbars autoHide>
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
                </Scrollbars>
            </section>
        </main>
    </div>
}

export default OverView