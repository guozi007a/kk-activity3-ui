/** 榜单列表 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import { useState, useId } from 'react'
import RankListC from '~/components/RankListC'
import { natureREG } from '~/utils/kkUtils'

const RankList = () => {

    const [type, setType] = useState(0)
    const id = useId()
    const _id = useId()
    const [count, setCount] = useState('')
    const [total, setTotal] = useState(20)

    return <div className={styles.rank_list}>
        <Tiny.TinyTitle1 title='榜单列表' />
        <Tiny.TinyText>
            活动项目中最常用的列表之一，用于展示主播和用户的活动参与度。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='榜单规则' />
        <Tiny.TinyText>
            榜单有很多种，常见的有月榜单，周榜单，主播榜单，用户榜单，总榜等。主播榜单中，点击主播头像是可以跳转到直播间的，而且开播的主播会显示开播状态。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div style={{ margin: '2rem' }}>
            <RankListC
                type={type}
                total={total}
            />
        </div>
        <Tiny.TinyTitle2 title='控制器' />
        <Controller>
            <tbody>
                <tr>
                    <td>榜单类型</td>
                    <td>type</td>
                    <td>number</td>
                    <td>0</td>
                    <td>
                        <label htmlFor={id}>
                            <input type="radio" name='type' id={id} value={type} checked={type === 0} onChange={() => { setType(0) }} />
                            主播
                        </label>
                        <label htmlFor={_id}>
                            <input type="radio" name='type' id={_id} value={type} checked={type === 1} onChange={() => { setType(1) }} />
                            用户
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>总条数</td>
                    <td>total</td>
                    <td>number</td>
                    <td>20</td>
                    <td>
                        <input type="text" value={count}
                            onChange={e => {
                                const val = e.target.value
                                if (val === '' || natureREG.test(val)) {
                                    setCount(e.target.value)
                                }
                            }}
                        />
                    </td>
                    <td>
                        <button
                            onClick={() => {
                               setTotal(count ? parseInt(count) : 20)
                            }}
                        >确定</button>
                    </td>
                    <td>count通常会取10、20或者30</td>
                </tr>
            </tbody>
        </Controller>
        <ViewCode />
    </div>
}

export default RankList



