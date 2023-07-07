/** 榜单列表代码 */

// react code
const reactCode = `
\`\`\`jsx
import './app.less'
import Scrollbars from 'react-custom-scrollbars-2'
import { kkUtils, preRoom } from '~/utils/kkUtils'
import { useMemo } from 'react'


const App = ({ type, renderList }) => {

    return <div className='rank_list'>
        <header className='rank_header'>
            <p className='h_1'>排名</p>
            <p className='h_2'>{type ? '用户' : '主播'}</p>
            <p className='h_3'>{type ? '送' : '收'}礼积分</p>
        </header>
        <div className='rank_main'>
            <Scrollbars autoHide>
                <ul className='rank_ul'>
                    {
                        renderList.map((v, i) => {
                            return <li key={i} className='rank_li'>
                                <p className='sort'>{i + 1}</p>
                                <a className='avatar'
                                    href={\`\${preRoom}\${v.userId || 0}\`}
                                    target="_blank"
                                    style={{cursor: type ? 'default' : ''}}
                                    onClick={(e) => {
                                        if (!v.userId || type) {
                                            e.preventDefault()
                                        }
                                    }}
                                >
                                    <img src={kkUtils.joinAvatarUrl(null, v.portrait, 128)} alt="" />
                                    {
                                        v.isLive
                                            ? <div className='live'></div>
                                            : null
                                    }
                                </a>
                                <p className='nick'>{v.nickname || '虚位以待'}</p>
                                <p className='score'>{v.score || '--'}</p>
                            </li>
                        })
                    }
                </ul>
            </Scrollbars>
        </div>
    </div>
}

export default App
\`\`\`
`

// less code
const lessCode = `
\`\`\`less

.rank_list {
    position: relative;
    width: 60rem;
    background-image: linear-gradient(#FFD9C9, #FFF1E2);
    border-radius: 0.6rem;
    overflow: hidden;
    box-sizing: border-box;
    padding-bottom: 2rem;
    
    .rank_header {
        height: 5.2rem;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 4rem;
        font-weight: 500;
        font-size: 2rem;
        background-image: linear-gradient(#FFDE81, #FF6F70);
        color: #fff;

        .h_1 {
            width: 4rem;
        }
        .h_2 {
            width: 6rem;
            margin-left: 10rem;
        }
        .h_3 {
            width: 10rem;
            margin-left: 20rem;
        }
    }

    .rank_main {
        position: relative;
        height: 50rem;
        overflow: hidden;
        margin-top: 2rem;

        .rank_ul {
            width: 92%;
            margin: auto;

            .rank_li {
                width: 100%;
                height: 8rem;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding-left: 3rem;
                background-color: #fff;
                margin-top: 1rem;
                border-radius: 0.6rem;

                &:nth-child(1) {
                    margin-top: 0;
                }

                .sort {
                    width: 4rem;
                }

                .avatar {
                    position: relative;
                    display: block;
                    width: 5rem;
                    height: 5rem;
                    border-radius: 50%;
                    border: 0.2rem solid #ffa604;
                    margin-left: 6rem;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }

                    .live {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1.2rem;
                        background: url('https://rescdn.kktv8.com/kk-web-res/activity3/play_2376/live.png') no-repeat center center;
                        background-size: contain;
                    }
                }

                .nick {
                    width: 12rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-left: 1.5rem;
                }

                .score {
                    width: 18rem;
                    margin-left: 4.5rem;
                    text-align: center;
                    color: #FFA178;
                }
            }
        }
    }
}
\`\`\`
`

export const rankListCodes = [reactCode, lessCode]
