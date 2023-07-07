/** 连抽奖励列表 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import LotteryListC, { LotteryListType } from '~/components/LotteryListC'
import { useState } from 'react'
import { lotteryListCodes } from '~/config/lotteryListCodes'

const cardImgs: string[] = []
for (let i = 0; i < 24; i++) {
    cardImgs.push(`https://rescdn.kktv8.com/kk-web-res/activity3/play_2366/card${i + 1}.png`)
}

const LotteryList = () => {

    const [list, setList] = useState<LotteryListType[]>([])

    // 获取随机卡片对象
    const getRandomCard = (): LotteryListType => {
        return {
            url: cardImgs[Math.floor(Math.random() * 24)],
            name: '节气卡片',
            count: Math.floor(Math.random() * 10) + 1
        }
    }

    return <div className={styles.lottery_list}>
        <Tiny.TinyTitle1 title='连抽奖励列表' />
        <Tiny.TinyText>
            当前活动中，经常会遇到<span style={{ color: 'var(--blue-2)' }}>抽一次、十连抽、百连抽</span>这样的玩法，<br />
            每种抽奖方式都会得到不同数量的奖励。但是，这些奖励需要在同一个容器内用不同的结构展示出来。比如奖励少的时候，需要居中排列，奖励多的时候按照顺序排列。<br />
            这就需要用特殊的样式进行处理。该组件就是用来解决这些问题。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div style={{margin: '2rem 0'}}>
            <LotteryListC lotteryList={list} />
        </div>
        <Tiny.TinyTitle2 title='控制器' />
        <Controller>
            <tbody>
                <tr>
                    <td>连抽玩法</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>
                        <button
                            onClick={() => {
                                setList([getRandomCard()])
                            }}
                        >抽一次</button>
                        <button
                            onClick={() => {
                                const items = []
                                for (let i = 0; i < Math.floor(Math.random() * 9 + 1); i++) {
                                    items.push(getRandomCard())
                                }
                                setList(items)
                            }}
                        >十连抽</button>
                        <button
                            onClick={() => {
                                const items = []
                                for (let i = 0; i < Math.floor(Math.random() * 18 + 1); i++) {
                                    items.push(getRandomCard())
                                }
                                setList(items)
                            }}
                        >百连抽</button>
                    </td>
                    <td>
                        <button onClick={() => {setList([])}}>重置</button>
                    </td>
                </tr>
            </tbody>
        </Controller>
        <ViewCode codes={lotteryListCodes} />
    </div>
}

export default LotteryList