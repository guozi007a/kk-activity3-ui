/** 连抽奖励列表 */
import styles from './index.module.scss'
import Scrollbars from 'react-custom-scrollbars-2'

const COLUMN = 3

export interface LotteryListType {
    url: string
    name: string
    count: number
}

const LotteryListC = ({
    lotteryList = [],
}: { lotteryList?: LotteryListType[] }) => {

    return <div className={`${styles.lottery_list} ${lotteryList && lotteryList.length >= COLUMN ? styles.multi : ''}`}>
        <main className={styles.list_main}>
            <Scrollbars autoHide>
                <ul className={`${styles.list_ul} ${lotteryList && lotteryList.length >= COLUMN ? styles.multi : ''}`}>
                    {
                        lotteryList && lotteryList.map((v, i) => {
                            return <li key={i} className={styles.list_li}>
                                <div className={styles.award_img}>
                                    <img src={v.url} alt="" />
                                </div>
                                <p className={styles.award_name}>{v.name}*{v.count}</p>
                            </li>
                        })
                    }
                </ul>
            </Scrollbars>
        </main>
    </div>
}

export default LotteryListC