/** 上下页 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'

const TurnPage = () => {
    return <div className={styles.turn_page}>
        <Tiny.TinyTitle1 title='上下页' />
        <Tiny.TinyText>
            上下页用于展示固定的列表数据，比如关注列表。通过上下翻页形式，展示列表数据。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='何时使用' />
        <Tiny.TinyText>
            可用于需要上下翻页的关注列表展示，以及其他同类型的样式展示。这是需求中的一种固定展示形式。
        </Tiny.TinyText>
    </div>
}

export default TurnPage