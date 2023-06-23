/** 控制器 */
import styles from './index.module.scss'

type PropType = {
    children?: React.ReactNode
}

const Controller = ({ children }: PropType) => {
    return <div className={styles.controller}>
        <table>
            <thead>
                <tr>
                    <th>字段表示</th>
                    <th>字段名称</th>
                    <th>数据类型</th>
                    <th>默认值</th>
                    <th>控制操作</th>
                    <th>备注</th>
                </tr>
            </thead>
            {children}
        </table>
    </div>
}

export default Controller