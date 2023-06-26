/** 简易版进度条 */
import styles from './simple.module.scss'

type PropType = {
    // 总任务量
    task?: number
    // 完成量
    finish?: number
}

const ProgSimple = ({
    task = 0,
    finish = 0,
}: PropType) => {
    return <div className={styles.prog_simple}>
        <div className={styles.prog}
            style={{
                width: `${task ? (finish >= task ? '100' : (finish / task * 100)) : '0'}%`,
                transition: 'all .3s',
            }}
        ></div>
    </div>
}

export default ProgSimple