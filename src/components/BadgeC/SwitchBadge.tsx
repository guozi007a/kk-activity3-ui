/** 切换型徽标 */
import styles from './switchBadge.module.scss'

type PropType = {
    isVisible?: boolean
}

const SwitchBadge = ({
    isVisible = false
}: PropType) => {
    return <>
        {
            isVisible
                ? <div className={styles.switch_badge}></div>
                : null
        }
    </>
}

export default SwitchBadge