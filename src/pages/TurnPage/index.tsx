/** 上下页 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import TurnPageC from '~/components/TurnPageC'
import { defaultAvatar } from '~/utils/kkUtils'
import { useState } from 'react'
import { turnPageCodes } from '~/config/turnPageCodes'

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
    { url: defaultAvatar, nick: '' },
    { url: defaultAvatar, nick: '' },
]

const TurnPage = () => {

    const [page, setPage] = useState(1)

    const hanldePage = (page?: number) => {
        console.log('page: ', page)
        page && setPage(page)
    }

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
                        mockList.slice((page - 1) * 5, page * 5).map((v, i) => {
                            return <li key={i} className={styles.item}>
                                <div className={styles.avatar}>
                                    <img src={v.url} alt="" />
                                </div>
                                <p className={styles.nick}>{v.nick || '虚位以待'}</p>
                                <div className={styles.give}></div>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className={styles.footer}>
                <TurnPageC
                    total={mockList.length}
                    onPage={hanldePage}
                />
            </div>
        </div>
        <Controller>
            <tbody>
                <tr>
                    <td>每页显示数量</td>
                    <td>pageSize</td>
                    <td>number</td>
                    <td>5</td>
                    <td>-</td>
                    <td>固定需求</td>
                </tr>
                <tr>
                    <td>数据总条数</td>
                    <td>total</td>
                    <td>number</td>
                    <td>0</td>
                    <td>-</td>
                    <td>不足5的倍数时，用默认数据补齐</td>
                </tr>
                <tr>
                    <td>翻页时的回调</td>
                    <td>onPage</td>
                    <td>{'(page?: number) => void'}</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </Controller>
        <ViewCode codes={turnPageCodes} />
    </div>
}

export default TurnPage