/** 上下页 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import TurnPageC from '~/components/TurnPageC'
import { defaultAvatar } from '~/utils/kkUtils'

const mockList = [
    { url: defaultAvatar, nick: '哈哈哈哈哈' },
    { url: defaultAvatar, nick: '黑黑黑黑黑黑' },
    { url: defaultAvatar, nick: '吼吼吼吼吼吼' },
    { url: defaultAvatar, nick: '啊啊啊啊啊' },
    { url: defaultAvatar, nick: '代价过高闹' },
    { url: defaultAvatar, nick: '哆啦估计哎' },
    { url: defaultAvatar, nick: '；安宽带服务共' },
    { url: defaultAvatar, nick: '的婆婆哥哥打开口' },
    { url: defaultAvatar, nick: '欸我家4493和0' },
    { url: defaultAvatar, nick: '接入佛哎44002分' },
    { url: defaultAvatar, nick: '大力鼓励那我' },
    { url: defaultAvatar, nick: '大夫美女五390-2' },
    { url: defaultAvatar, nick: '但理解噶啊另外323' },
]

const TurnPage = () => {
    return <div className={styles.turn_page}>
        <Tiny.TinyTitle1 title='上下页' />
        <Tiny.TinyText>
            上下页用于展示固定的列表数据，比如关注列表。通过点击上一页和下一页按钮，获取当前页面的列表数据。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='何时使用' />
        <Tiny.TinyText>
            可用于需要上下翻页的关注列表展示，以及其他同类型的样式展示。这是需求中的一种固定展示形式。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div className={styles.container}>
            <header className={styles.header}>只能转赠给已关注的好友哦</header>
            <div className={styles.list}>
                <ul className={styles.list_ul}>
                    {
                        mockList.map((v, i) => {
                            return <li key={i} className={styles.item}>
                                <div className={styles.avatar}>
                                    <img src={v.url} alt="" />
                                </div>
                                <p className={styles.nick}>{v.nick}</p>
                                <div className={styles.give}></div>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className={styles.footer}>
                <TurnPageC
                    total={mockList.length}
                />
            </div>
        </div>
        <Controller></Controller>
        <ViewCode />
    </div>
}

export default TurnPage