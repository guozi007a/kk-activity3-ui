/** 切换时间标签 */

// react code
const reactCode = `
\`\`\`jsx
import './app.less'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'

// 设备是否为手机端
const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|ipad/i.test(navigator.userAgent);
// 一天时间转换成毫秒数
const D2MS = 24 * 60 * 60 * 1000
// 当前时间戳
const NOW = Date.now()
// 尺寸单位
const UNIT = isMobile ? 'rem' : 'px'

const DateTabs = ({
    tabWidth, // 只传数值即可，不带单位
    gap, // 只传数值即可，不带单位
    count,
    start,
    end,
    limits = 30,
    onDate,
}) => {

    if (!count || count < 3) {
        console.error('可显示数量过少，请检查配置！')
    }

    // tab总数量
    const TABS_COUNT = Math.ceil((end - start) / D2MS)

    if (TABS_COUNT > limits) {
        console.error('活动时间持续过长，时间配置可能有误，请检查配置！')
    }

    // 当前日期对应的tabIndex
    const getIndex = () => {
        const _start = new Date(dayjs(start + D2MS).format('YYYY/MM/DD')).getTime()
        if (NOW < _start) return 0
        if (NOW > (end - D2MS)) return TABS_COUNT - 1
        return Math.ceil((NOW - _start) / D2MS)
    }

    const [tabIndex, setTabIndex] = useState(getIndex())

    // tab和间距总宽度
    const TAB_WIDTH = tabWidth + gap
    // 标签外容器宽度
    const MAIN_WIDTH = tabWidth * count + (count - 1) * gap
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
        const MIDDLE_INDEX = count % 2 ? Math.ceil(count / 2) - 1 : Math.ceil(count / 2)
        if (tabIndex <= MIDDLE_INDEX) return 0
        if(tabIndex >= (TABS_COUNT - MIDDLE_INDEX)) return - (TABS_COUNT - count) * TAB_WIDTH
        return - TAB_WIDTH * (tabIndex - MIDDLE_INDEX)
    }

    useEffect(() => { 
        const param = {
            index: tabIndex,
            ...TAB_LIST[tabIndex]
        }
        onDate && onDate(param)
    }, [tabIndex])

    return <div className='date_switch_tabs'>
        <div className={\`pre \${tabIndex <= 0 ? '' : 'active'}\`} onClick={handlePre}></div>
        <div className='tabs_main'
            style={{
                width: \`\${MAIN_WIDTH}\${UNIT}\`,
            }}
        >
            <ul className='tabs_ul'
                style={{
                    marginLeft: \`\${getMarginLeft()}\${UNIT}\`,
                }}
            >
                {
                    TAB_LIST && TAB_LIST.map((v, i) => {
                        return <li key={i} className={\`tab \${tabIndex === i ? 'active' : ''}\`}
                            style={{
                                width: \`\${tabWidth}\${UNIT}\`,
                                marginRight: \`\${gap}\${UNIT}\`,
                            }}
                            onClick={() => {
                                setTabIndex(i)
                            }}
                        >{v.text}</li>
                    })
                }
            </ul>
        </div>
        <div className={\`next \${(tabIndex >= TABS_COUNT - 1) ? '' : 'active'}\`} onClick={handleNext}></div>
    </div>
}

const App = () => {

    const handleDate = (param) => {
        console.log('param: ', param)
    }

    return <div style={{width: '900px'}}>
        <DateTabs
            tabWidth={120}
            gap={20}
            count={5}
            start={1687489200000}
            end={1688227200000}
            onDate={handleDate}
        />
    </div>
}

export default App
\`\`\`
`

// less code
const lessCode = `
\`\`\`less
.date_switch_tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .pre,
    .next {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #bee3f8;
        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
            background-color: #53d0ff;
            cursor: pointer;

            &:hover {
                background-color: #8de0ff;
            }
        }
    }

    .tabs_main {
        position: relative;
        overflow: hidden;
        height: 60px;
        padding: 0 10px;

        .tabs_ul {
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: 0;
            transition: margin-left .3s;

            .tab {
                height: 40px;
                flex-shrink: 0;
                box-sizing: border-box;
                box-shadow: 0 0 2px 1px #f0f0f0;
                border-radius: 6px;
                text-align: center;
                line-height: 40px;
                cursor: pointer;
                transition: all .3s;

                &.active {
                    background-image: linear-gradient(to right, #bee3f8, #53d0ff);
                    color: #fff;
                    transition: all .3s;
                }

                &:hover {
                    box-shadow: 0 0 6px 2px #bee3f8;
                    transform: scale(1.1);
                    transition: all .3s;
                }
            }
        }
    }
}
\`\`\`
`

export const dateTabsCodes = [reactCode, lessCode]