/** 查看代码 */
import styles from './index.module.scss'

type FileType = {
    file?: string
}
const ViewCode = ({ file }: FileType) => {

    const link = (file?: string): string => {
        return `https://github.com/guozi007a/kk-activity3-ui/blob/main/src/pages/${file}/code.md`
    }
    
    return <>
        <span className={styles.viewcode}>
            <a href={link(file)} target='_blank'>复制代码</a>
        </span>
    </>
}

export default ViewCode