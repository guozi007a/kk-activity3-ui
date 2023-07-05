/** 极简组件 */
import styles from './index.module.scss'

interface TitleType {
    title?: string
}
export const TinyTitle1 = ({ title }: TitleType) => {
    return <p className={styles.title1}>{title}</p>
}
export const TinyTitle2 = ({ title }: TitleType) => {
    return <p className={styles.title2}>{title}</p>
}

interface TinyTextType {
    children?: React.ReactNode
}
export const TinyText = ({ children }: TinyTextType) => {
    return <p className={styles.tinytext}>{children}</p>
}

interface TinyGridType {
    component?: string
    name?: string
    url?: string
}
export const TinyGrid = ({ component, name, url }: TinyGridType) => {
    return <div className={styles.tinygird}>
        <header className={styles.grid_header}>
            <span>{component}</span>
            <span>{name}</span>
        </header>
        <div className={styles.grid_main}>
            <img src={url} alt="" />
        </div>
    </div>
}

interface TinyTagType {
    tag?: string
}
export const TinyTag = ({ tag }: TinyTagType) => {
    return <code className={styles.tinytag}>{tag}</code>
}

interface TinyImgType {
    url?: string
    position?: 'left' | 'center' | 'right'
}
export const TinyImg = ({ url, position = 'left' }: TinyImgType) => {
    return <div className={styles.tinyimg} style={{textAlign: position}}>
        <img src={url} alt="" />
    </div>
}

interface TinyButtonProp {
    children?: string | React.ReactNode
    onClick?: () => void
}
export const TinyButton = ({ children, onClick }: TinyButtonProp) => {
    return <button className={styles.tinybtn} onClick={onClick}>
        {children}
    </button>
}