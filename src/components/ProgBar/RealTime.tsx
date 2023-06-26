/** 显示实时进度 */
import styles from './realTime.module.scss'

type PropType = {
    // 总任务量
    task?: number
    // 完成量
    finish?: number
}

const RealProg = ({
    task = 0,
    finish = 0,
}: PropType) => {

    const rate = `${task ? (finish >= task ? '100' : (finish / task * 100)) : '0'}%`

    return <div className={styles.real_prog}>
        <div className={styles.prog}
            style={{
                width: rate,
                transition: 'all .3s'
            }}
        >
            <div className={styles.accompany}>{rate}</div>
        </div>
    </div>
}

export default RealProg