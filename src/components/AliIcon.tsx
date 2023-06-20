/** 阿里图标 */
type PorpType = {
    icon?: string,
    styles?: {
        [key: string]: string | number
    },
}

const AliIcon = ({ icon, styles }: PorpType) => {
    return <>
        <svg className="icon" aria-hidden="true"
            style={styles ?? {}}
        >
            <use xlinkHref={`#${icon}`}></use>
        </svg>
    </>
}

export default AliIcon