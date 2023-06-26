/** 切换时间标签 */
import styles from './index.module.scss'
import AliIcon from '~/components/AliIcon'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'

// 一天时间转换成毫秒数
const D2MS = 24 * 60 * 60 * 1000
// 当前时间戳
const NOW = Date.now()

export interface ParamType {
    index?: number
    date?: string
    text?: string
}

type PropType = {
    // tab宽度
    tabWidth?: number
    // tab高度
    tabHeight?: number
    // 相邻tab之间的间隔距离
    gap?: number
    // 可显示的tab个数
    count?: number
    // 开始时间戳
    start?: number
    // 结束时间戳
    end?: number,
    // 活动天数限制
    limits?: number
    // 获取tab日期数据，如index, date, text等
    onDate?: (param?: ParamType) => void
}

const DateSwitchTabs = ({
    tabWidth = 120, // 默认120px
    tabHeight = 40, // 默认40px
    gap = 20, // 默认20px
    count = 5, // 默认5个
    start = 1687489200000, // 默认'2023/06/23 11:00'
    end = 1688227200000, // 默认'2023/07/02 00:00:00'
    limits = 30, // 默认30天
    onDate,
}: PropType) => {

    if (start >= end) {
        console.error('结束时间要大于开始时间！')
    }
    if (tabHeight > 60) {
        console.error('tab高度超标！')
    }
    if (count < 3) {
        console.error('可显示数量过少，请检查配置！')
    }

    // tab总数量
    const TABS_COUNT = Math.ceil((end - start) / D2MS)
    if (TABS_COUNT > limits) {
        console.error('活动时间持续过长，时间配置可能有误，请检查配置！')
    }
    // 当前日期对应的tabIndex
    const getIndex = () => {
        const _start = new Date(dayjs(start! + D2MS).format('YYYY/MM/DD')).getTime()
        if (NOW < _start) return 0
        if (NOW > (end! - D2MS)) return TABS_COUNT - 1
        return Math.ceil((NOW - _start) / D2MS)
    }

    const [tabIndex, setTabIndex] = useState(getIndex())

    // tab和间距总宽度
    const TAB_WIDTH = tabWidth + gap
    // 标签外容器宽度
    const MAIN_WIDTH = tabWidth * count + (count - 1) * gap
    // 向标签中注入数据
    const TAB_LIST: ParamType[] = []
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

    return <div className={styles.date_switch_tabs}>
        <div className={`${styles.pre} ${tabIndex <= 0 ? '' : styles.active}`} onClick={handlePre}>
            <AliIcon icon='icon-zuo' />
        </div>
        <div className={styles.tabs_main}
            style={{
                width: `${MAIN_WIDTH / 10}rem`,
            }}
        >
            <ul className={styles.tabs_ul}
                style={{
                    marginLeft: `${getMarginLeft() / 10}rem`,
                }}
            >
                {
                    TAB_LIST && TAB_LIST.map((v, i) => {
                        return <li key={i} className={`${styles.tab} ${tabIndex === i ? styles.active : ''}`}
                            style={{
                                width: `${tabWidth / 10}rem`,
                                height: `${tabHeight / 10}rem`,
                                marginRight: `${gap / 10}rem`,
                                lineHeight: `${tabHeight / 10}rem`,
                            }}
                            onClick={() => {
                                setTabIndex(i)
                            }}
                        >{v.text}</li>
                    })
                }
            </ul>
        </div>
        <div className={`${styles.next} ${(tabIndex >= TABS_COUNT - 1) ? '' : styles.active}`} onClick={handleNext}>
            <AliIcon icon='icon-xiangyou1' />
        </div>
    </div>
}

export default DateSwitchTabs