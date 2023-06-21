/** 查看代码 */
import styles from './index.module.scss'
import MDEditor from "@uiw/react-md-editor"
import { useState } from 'react'

type PropType = {
    codes?: string[]
}

const ViewCode = ({ codes }: PropType) => {

    const [isVisible ,setIsVisible] = useState(false)

    return <>
        <span className={styles.viewcode}
            onClick={() => {
                setIsVisible(!isVisible)
            }}
        >查看代码</span>
        <div className={`${styles.codes} ${isVisible ? styles.active : ''}`}>
            {
                codes && codes.map((v, i) => {
                    return <MDEditor.Markdown 
                        key={i}
                        source={v}
                    />
                })
            }
        </div>
    </>
}

export default ViewCode