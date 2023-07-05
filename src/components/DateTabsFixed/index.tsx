/** 固定容器宽度的时间标签页 */
import styles from './index.module.scss'
import AliIcon from '~/components/AliIcon'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'

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

interface TabListType {
    date: string
    text: string
}

interface ParamType extends TabListType {
    index: number
}

interface PropType {
    start: number
    end: number
    onDate?: (param: ParamType) => void
}

const DateTabsFixed = ({
    start,
    end,
    onDate,
}: PropType) => {

    // tab数量
    const TABS_COUNT = Math.ceil((end - start) / D2MS)
    // 当前日期对应的tabIndex
    const getIndex = () => {
        const _start = new Date(dayjs(start! + D2MS).format('YYYY/MM/DD')).getTime()
        if (NOW < _start) return 0
        if (NOW > (end! - D2MS)) return TABS_COUNT - 1
        return Math.ceil((NOW - _start) / D2MS)
    }

    const [tabIndex, setTabIndex] = useState(getIndex())

    // 向标签中注入数据
    const TAB_LIST: TabListType[] = []
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
        const param: ParamType = {
            index: tabIndex,
            ...TAB_LIST[tabIndex]
        }
        onDate && onDate(param)
    }, [tabIndex])

    return <div className={styles.date_tabs_fixed}>
        <div className={`${styles.pre} ${tabIndex <= 0 ? '' : styles.active}`} onClick={handlePre}>
            <AliIcon icon='icon-zuo' />
        </div>
        <div className={styles.tabs_main}>
            <ul className={styles.tabs_ul}
                style={{
                    marginLeft: `${getMarginLeft() / 10}rem`,
                }}
            >
                {
                    TAB_LIST.map((v, i) => {
                        return <li key={i} className={`${styles.tab_li} ${tabIndex === i ? styles.active : ''}`}
                            onClick={() => {
                                setTabIndex(i)
                            }}
                        >{v.text}</li>
                    })
                }
            </ul>
        </div>
        <div className={`${styles.next} ${tabIndex >= TABS_COUNT - 1 ? '' : styles.active}`} onClick={handleNext}>
            <AliIcon icon='icon-xiangyou1' />
        </div>
    </div>
}

export default DateTabsFixed