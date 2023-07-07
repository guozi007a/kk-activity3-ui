/** 弹出框代码 */

// react code
const reactCode = `
\`\`\`jsx
/** 连抽奖励列表 */
import './app.less'
import Scrollbars from 'react-custom-scrollbars-2'

const COLUMN = 3

const App = ({
    lotteryList = [],
} => {

    return <div className={\`lottery_list \${lotteryList && lotteryList.length >= COLUMN ? multi : ''}\`}>
        <main className='list_main'>
            <Scrollbars autoHide>
                <ul className={\`list_ul \${lotteryList && lotteryList.length >= COLUMN ? multi : ''}\`}>
                    {
                        lotteryList && lotteryList.map((v, i) => {
                            return <li key={i} className='list_li'>
                                <div className='award_img'>
                                    <img src={v.url} alt="" />
                                </div>
                                <p className='award_name'>{v.name}*{v.count}</p>
                            </li>
                        })
                    }
                </ul>
            </Scrollbars>
        </main>
    </div>
}

export default App
\`\`\`
`

// less code
const lessCode = `
\`\`\`less

.lottery_list {
    position: relative;
    width: 40rem;
    height: 24rem;
    background-image: linear-gradient(#F598F4, #E5DDF2);
    border-radius: 1rem;
    box-sizing: border-box;
    padding: 2rem 0;

    &.multi {
        height: 50rem;
    }

    .list_main {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .list_ul {
            width: 372px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .list_li {
                width: 10rem;
                margin: 0 0 2rem 3.5rem;

                &:nth-child(3n - 2) {
                    margin-left: 0;
                }

                .award_img {
                    width: 100%;
                    margin-bottom: 0.5rem;

                    img {
                        width: 100%;
                        border-radius: 1rem;
                    }
                }

                .award_name {
                    text-align: center;
                    font-size: 1.4rem;
                }
            }

            &.multi {
                justify-content: flex-start;
            }
        }
    }
}
\`\`\`
`

export const lotteryListCodes = [reactCode, lessCode]