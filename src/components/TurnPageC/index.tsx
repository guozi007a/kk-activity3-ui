/** 上下页 */
import styles from './index.module.scss'
import { useState, useEffect } from 'react'

type PropType = {
    // 每页显示数量
    pageSize?: number
    // 获取当前页
    onPage?: (page?: number) => void
    // 数据总数
    total?: number
}

const TurnPageC = ({
    pageSize = 5,
    onPage,
    total = 0,
}: PropType) => {

    const [current, setCurrent] = useState(1);

    const handlePre = () => {
        if (current <= 1) return
        setCurrent(current - 1)
    }

    const handleNext = () => {
        if (current >= Math.ceil(total / pageSize)) return
        setCurrent(current + 1)
    }

    useEffect(() => { 
        onPage && onPage(current)
    }, [current])

    return <div className={styles.turn_btns}>
        {
            current <= 1
                ? null
                : <div className={`${styles.btn} ${styles.pre}`} onClick={handlePre}>上一页</div>
        }
        {
            current >= Math.ceil(total / pageSize)
                ? null
                : <div className={`${styles.btn} ${styles.next}`} onClick={handleNext}>下一页</div>
        }
    </div>
}

export default TurnPageC