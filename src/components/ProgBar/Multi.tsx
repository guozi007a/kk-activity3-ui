/** 多阶段任务进度 */
import styles from './multi.module.scss'

type PropType = {
    // 任务分段列表
    taskList?: number[]
    // 已完成任务量
    finish?: number
    // 每个任务断点的位置，只写left的值，不需要带单位
    left?: number[]
    // 进度条总宽度，只写值，不带单位
    width?: number
}

const ProgMulti = ({
    taskList = [],
    finish = 0,
    left = [],
    width = 0,
}: PropType) => {

    // 获取进度
    const getRate = () => {
        if (!taskList || !taskList.length || !left || !left.length || taskList.length !== left.length || !finish || !width) return 0

        // !类型断言，解决未定义问题
        if (finish >= taskList.at(-1)!) return 1

        // 核心逻辑
        for (let i = 0; i < taskList.length; i++) {
            if (finish < taskList[i]) {
                if (i === 0) {
                    return (finish / taskList[0]) * (left[0] / width)
                } else {
                    return (left[i - 1] / width) + ((finish - taskList[i - 1]) / (taskList[i] - taskList[i - 1])) * ((left[i] - left[i - 1]) / width)
                }
            }
        }
    }

    return <div className={styles.prog_multi} style={{width: `${width / 10}rem`}}>
        <div className={styles.prog}
            style={{
                width: `${getRate()! * 100}%`,
                transition: 'all .3s',
            }}
        ></div>
        {
            taskList && taskList.length > 1 &&
            left && (left.length === taskList.length) &&
            taskList.map((v, i) => {
                return <div key={i}
                    className={`${styles.award} ${finish >= v ? styles.active : ''}`}
                    style={{
                        left: `${left[i] / 10}rem`,
                    }}
                ></div>
            })
        }
    </div>
}

export default ProgMulti