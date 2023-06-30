/** 一组相同位置通知的容器 */
import styles from './containers.module.scss'
import Notify from './Notify'
import { ContainersProp, defaultPosition, TypeConfig } from './interface.config'

const mockList = [
    { content: 'hello', during: 1 },
    { type: 'info', content: 'hello hahh dddfag', during: 1 },
    { type: 'default', content: 'hello odidnfa', during: 1 },
    { type: 'sc', content: ' you are successful', during: 1 },
    { type: 'err', content: <span>you are wrong</span>, during: 1 },
    { type: 'warn', content: 'hello dfdgadsag g hrehgh  rg  t  tret qwr tqrtqt q ', during: 1 },
    { type: 'sc', content: 'hello', during: 1 },
]

const Containers = ({
    position = defaultPosition,
}: ContainersProp) => {
    return <div className={`${styles.containers} ${styles[position || defaultPosition]}`}>
        {
            mockList.map((v, i) => {
                return <Notify
                    key={i}
                    type={v.type as TypeConfig}
                    content={v.content}
                />
            })
        }
    </div>
}

export default Containers