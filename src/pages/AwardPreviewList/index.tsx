/** 奖励预览列表 */
import styles from './index.module.scss'
import { TinyTitle1, TinyTitle2, TinyText, TinyTag } from '~/components/Tinys'
import { useState } from 'react'
import { getImgByUrlOrId } from '~/utils/kkUtils'
import { Scrollbars } from 'react-custom-scrollbars-2'
import ViewCode from '~/components/ViewCode'
import { awardCodes } from '~/config/awardPreviewCode'

interface AwardsType {
    name?: string
    url?: string
    id?: number
}
type AwardListType = AwardsType[][]

const awardExa = { name: '龙舟小队', url: '', id: 40003289 }

const list = [
    [
        { name: '龙舟小队', url: '', id: 40003289 },
    ],
    [
        { name: '龙舟小队', url: '', id: 40003289 },
    ],
]

const REG = /^\+?[1-9]\d*$/

const AwardPreviewList = () => {

    const [awardList, setAwardList] = useState<AwardListType>(list)
    const [direction, setDirection] = useState('row')
    const [count, setCount] = useState('3')
    const [width, setWidth] = useState('430')
    const [height, setHeight] = useState('160')
    const [paddingTop, setPaddingTop] = useState('50')

    const handleAdd = (order: number) => {
        const newList = awardList.map((v, i) => {
            if (i === order - 1) {
                v.push(awardExa)
                return v
            } else {
                return v
            }
        })
        setAwardList(newList)
    }

    return <div className={styles.award_preview_list}>
        <TinyTitle1 title='奖励预览列表' />
        <TinyText>用于展示某个活动中可能获得的奖励。通常是有一个或多个列表组成，每个列表内部是需要横向可滚动展示的。</TinyText>
        <TinyText>本页面在 <TinyTag tag='Web' /> 端展示更佳。</TinyText>
        <div className={styles.preview_container}>
            <div className={styles.preview_cont}>
                <Scrollbars autoHide>
                    <TinyTitle2 title='效果展示' />
                    <div className={styles.show}>
                        <ul className={`${styles.preview_ul} ${direction === 'column' ? styles.column : ''}`}>
                            {
                                awardList.map((v, i) => {
                                    return <li key={i} className={`${styles.preview_li} ${styles[`preview_li_${i + 1}`]}`}
                                        style={{
                                            width: `${width ? parseInt(width) / 10 : 0}rem`,
                                            height: `${height ? parseInt(height) / 10 : 0}rem`,
                                            paddingTop: `${paddingTop ? parseInt(paddingTop) / 10 : 0}rem`,
                                        }}
                                    >
                                        <div className={styles.inner_main}
                                            style={{
                                                height: `${((height ? parseInt(height) : 0) - (paddingTop ? parseInt(paddingTop) : 0) - 10) / 10}rem`,
                                            }}
                                        >
                                            <Scrollbars autoHide>
                                                <ul className={`${styles.inner_ul} ${v.length > (count ? parseInt(count) : 0) ? '' : styles.center}`}>
                                                    {
                                                        v && v.map((item, index) => {
                                                            return <li key={index} className={styles.inner_li}>
                                                                <div className={styles.award_img}>
                                                                    <img src={getImgByUrlOrId(item.url, item.id)} alt="" />
                                                                </div>
                                                                <p className={styles.award_name}>{item.name}</p>
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </Scrollbars>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <TinyTitle2 title='控制器' />
                    <div className={styles.controller}>
                        <table>
                            <thead>
                                <tr>
                                    <th>字段表示</th>
                                    <th>字段名称</th>
                                    <th>数据类型</th>
                                    <th>默认值</th>
                                    <th>控制操作</th>
                                    <th>备注</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>排列方式</td>
                                    <td>direction</td>
                                    <td>'row' | 'column'</td>
                                    <td>'row'</td>
                                    <td>
                                        <label htmlFor="direction1">
                                            <input type="radio" name="direction" id="direction1" value='row' checked={direction === 'row'}
                                                onChange={(e) => {setDirection(e.target.value)}}
                                            />横排
                                        </label>
                                        <label htmlFor="direction2" style={{marginLeft: '1rem'}}>
                                            <input type="radio" name="direction" id="direction2" value='column' checked={direction === 'column'} 
                                                onChange={(e) => {setDirection(e.target.value)}}
                                            />竖排
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>居中排列个数</td>
                                    <td>count</td>
                                    <td>number</td>
                                    <td>3</td>
                                    <td>
                                        <input type="text" value={count}
                                            onChange={e => {
                                                const val = e.target.value
                                                if (val === '' || REG.test(val)) {
                                                    setCount(val)
                                                }
                                            }}
                                        />
                                    </td>
                                    <td>礼物个数小于等于count时，居中排列</td>
                                </tr>
                                <tr>
                                    <td>单列表宽度</td>
                                    <td>width</td>
                                    <td>number</td>
                                    <td>430</td>
                                    <td>
                                        <input type="text" value={width}
                                            onChange={e => {
                                                const val = e.target.value
                                                if (val === '' || REG.test(val)) {
                                                    setWidth(val)
                                                }
                                            }}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>单列表高度</td>
                                    <td>height</td>
                                    <td>number</td>
                                    <td>160</td>
                                    <td>
                                        <input type="text" value={height}
                                            onChange={e => {
                                                const val = e.target.value
                                                if (val === '' || REG.test(val)) {
                                                    setHeight(val)
                                                }
                                            }}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>上边距</td>
                                    <td>paddingTop</td>
                                    <td>number</td>
                                    <td>40</td>
                                    <td>
                                        <input type="text" value={paddingTop}
                                            onChange={e => {
                                                const val = e.target.value
                                                if (val === '' || REG.test(val)) {
                                                    setPaddingTop(val)
                                                }
                                            }}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>添加奖励</td>
                                    <td>award</td>
                                    <td>AwardsType</td>
                                    <td>[ ]</td>
                                    <td>
                                        <button onClick={() => {handleAdd(1)}}>往1添加</button>
                                        <button style={{marginLeft: '0.5rem'}} onClick={() => {handleAdd(2)}}>往2添加</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ViewCode codes={awardCodes} />
                </Scrollbars>
            </div>
        </div>
    </div>
}

export default AwardPreviewList