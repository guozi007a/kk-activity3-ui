/** 切换型徽标 */

// react code
const reactCode = `
\`\`\`jsx
/** 固定容器宽度的时间标签页 */
import './app.less'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'

// 尺寸单位
const UNIT = 'px'
// tab间隔，和css样式中保持一致
const gap = 20
// tab宽度 和css样式中保持一致
const tab_width = 120
// 每个tab总宽度
const TOTAL = gap + tab_width
// 容器宽度
const WIDTH = 600
// 一天时间转换成毫秒数
const D2MS = 24 * 60 * 60 * 1000
// 当前时间戳
const NOW = Date.now()
// 完整展示出的tab数
const COUNT = Math.floor((WIDTH + gap) / TOTAL)

const DateTabsFixed = ({ start, end, onDate }) => {

    // tab数量
    const TABS_COUNT = Math.ceil((end - start) / D2MS)
    // 当前日期对应的tabIndex
    const getIndex = () => {
        const _start = new Date(dayjs(start + D2MS).format('YYYY/MM/DD')).getTime()
        if (NOW < _start) return 0
        if (NOW > (end - D2MS)) return TABS_COUNT - 1
        return Math.ceil((NOW - _start) / D2MS)
    }

    const [tabIndex, setTabIndex] = useState(getIndex())

    // 向标签中注入数据
    const TAB_LIST = []
    for (let i = 0; i < TABS_COUNT; i++) {
        const dateObj = {
            text: dayjs(start + D2MS * i).format('M月D日'),
            date: dayjs(start + D2MS * i).format('YYYYMMDD'),
        }
        TAB_LIST.push(dateObj)
    }

    const handlePre = () => {
        if (tabIndex <= 0) return
        setTabIndex(tabIndex - 1)
    }

    const handleNext = () => {
        if (tabIndex >= TABS_COUNT - 1) return
        setTabIndex(tabIndex + 1)
    }

    const getMarginLeft = () => {
        if (tabIndex < COUNT - 1) return 0
        if(tabIndex >= TAB_LIST.length - 2) return -(TAB_LIST.length * TOTAL - gap - WIDTH)
        return (COUNT - tabIndex - 2) * TOTAL
    }

    useEffect(() => { 
        const param = {
            index: tabIndex,
            ...TAB_LIST[tabIndex]
        }
        onDate && onDate(param)
    }, [tabIndex])

    return <div className='date_tabs_fixed'>
        <div className={\`pre \${tabIndex <= 0 ? '' : 'active'}\`}
            onClick={handlePre}
        ></div>
        <div className='tabs_main'>
            <ul className='tabs_ul'
                style={{
                    marginLeft: \`\${getMarginLeft()}\${UNIT}\`,
                }}
            >
                {
                    TAB_LIST.map((v, i) => {
                        return <li key={i} className={\`tab_li \${tabIndex === i ? 'active' : ''}\`}
                            onClick={() => {
                                setTabIndex(i)
                            }}
                        >{v.text}</li>
                    })
                }
            </ul>
        </div>
        <div className={\`next \${tabIndex >= TABS_COUNT - 1 ? '' : 'active'}\`}
            onClick={handleNext}
        >
        </div>
    </div>
}

const App = () => {

    const handleDate = (param) => {
        console.log('date-param: ', param)
    }

    return <DateTabsFixed
        start={1688439600000}
        end={1689091200000}
        onDate={handleDate}
    />
}

export default App

\`\`\`
`

// less code
const lessCode = `
\`\`\`less
.date_tabs_fixed {
    position: relative;
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    user-select: none;

    .pre,
    .next {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: gray;
        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
            background-color: cyan;
            cursor: pointer;

            &:hover {
                background-color: blue;
            }
        }
    }

    .tabs_main {
        position: relative;
        width: 600px;
        height: 60px;
        overflow: hidden;

        .tabs_ul {
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: 0;
            transition: margin-left .3s;

            .tab_li {
                flex-shrink: 0;
                width: 120px;
                height: 40px;
                background-color: gray;
                color: #fff;
                margin-right: 20px;
                text-align: center;
                line-height: 40px;
                box-sizing: border-box;
                border-radius: 6px;
                text-align: center;
                cursor: pointer;
                transition: all .3s;

                &.active {
                    background-color: blue;
                    transition: all .3s;
                }

                &:hover {
                    background-color: lightblue;
                    transition: all .3s;
                }
            }
        }
    }
}
\`\`\`
`

export const dateTabsFixedCodes = [reactCode, lessCode]