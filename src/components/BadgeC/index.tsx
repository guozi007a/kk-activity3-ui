/** 徽标数 */
import styles from './index.module.scss'

type PropType = {
    // 数量
    count?: number
    // 数量为0时，是否显示徽标，默认为不显示
    showZero?: boolean
    // 临界值，超过临界值时，显示n+的形式，默认为0，表示不设置
    critical?: number
    // 只显示红点，不显示数字，默认为false，即红点和数字都显示
    onlydot?: boolean
}

const BadgeC = ({
    count = 0,
    showZero = false,
    critical = 0,
    onlydot = false,
}: PropType) => {

    // 如果数量比较大，小圆点宽度就需要拉长，此时就需要单独设置样式，比如加上padding
    const cls = onlydot
        ? ''
        : critical
            ? count > critical
                ? (`${critical}+`).length >= 3
                    ? styles.multi
                    : ''
                : count > 100
                    ? styles.multi
                    : ''
            : count > 100
                ? styles.multi
                : ''

    const Bridge = <span className={styles.badge}>
        {
            onlydot
                ? null
                : <sup className={cls}>
                    {
                        critical
                            ? count > critical
                                ? `${critical}+`
                                : count
                            : count
                    }
                </sup>
        }
    </span>
    
    return <>
        {
            count
                ? Bridge
                : showZero
                    ? Bridge
                    : null
        }
    </>
}

export default BadgeC