/** 任务进度条 */
import { useState } from 'react'
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import ProgSimple from '~/components/ProgBar/Simple'
import RealProg from '~/components/ProgBar/RealTime'
import ProgMulti from '~/components/ProgBar/Multi'
import { natureREG } from '~/utils/kkUtils'
import { progSimpleCodes } from '~/config/progSimpleCodes'
import { realProgCodes } from '~/config/realProgCodes'

const Progress = () => {

    const [simTask, setSimTask] = useState('')
    const [simFinish, setSimFinish] = useState('')
    const [realTask, setRealTask] = useState('')
    const [realFinish, setRealFinish] = useState('')
    const [multiFinish, setMultiFinish] = useState('')

    return <div className={styles.progress}>
        <Tiny.TinyTitle1 title='任务进度条' />
        <Tiny.TinyText>用于显示任务完成进度。在实际场景中，有多种形式。</Tiny.TinyText>
        <Tiny.TinyTitle1 title='简易进度条' />
        <Tiny.TinyText>最简易的进度展示。通常是有一个总的任务量，根据完成的任务量显示进度。</Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div className={styles.container}>
            <ProgSimple
                task={simTask ? parseInt(simTask) : 0}
                finish={simFinish ? parseInt(simFinish) : 0}
            />
        </div>
        <Controller>
            <tbody>
                <tr>
                    <td>总任务量</td>
                    <td>task</td>
                    <td>number</td>
                    <td>0</td>
                    <td>
                        <input type="text"
                            placeholder='0'
                            value={simTask}
                            onChange={e => {
                                const val = e.target.value
                                if (val === '' || natureREG.test(val)) {
                                    setSimTask(val)
                                }
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>任务完成量</td>
                    <td>finish</td>
                    <td>number</td>
                    <td>0</td>
                    <td>
                        <input type="text"
                            placeholder='0'
                            value={simFinish}
                            onChange={e => {
                                const val = e.target.value
                                if (val === '' || natureREG.test(val)) {
                                    setSimFinish(val)
                                }
                            }}
                        />
                    </td>
                </tr>
            </tbody>
        </Controller>
        <ViewCode codes={progSimpleCodes} />
        <Tiny.TinyTitle1 title='显示实时进度' />
        <Tiny.TinyText>包含一个额外的显示实时进度的标签。</Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div className={`${styles.container} ${styles.real}`}>
            <RealProg
                task={realTask ? parseInt(realTask) : 0}
                finish={realFinish ? parseInt(realFinish) : 0}
            />
        </div>
        <Controller>
            <tbody>
                <tr>
                    <td>总任务量</td>
                    <td>task</td>
                    <td>number</td>
                    <td>0</td>
                    <td>
                        <input type="text"
                            placeholder='0'
                            value={realTask}
                            onChange={e => {
                                const val = e.target.value
                                if (val === '' || natureREG.test(val)) {
                                    setRealTask(val)
                                }
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>任务完成量</td>
                    <td>finish</td>
                    <td>number</td>
                    <td>0</td>
                    <td>
                        <input type="text"
                            placeholder='0'
                            value={realFinish}
                            onChange={e => {
                                const val = e.target.value
                                if (val === '' || natureREG.test(val)) {
                                    setRealFinish(val)
                                }
                            }}
                        />
                    </td>
                </tr>
            </tbody>
        </Controller>
        <ViewCode codes={realProgCodes} />
        <Tiny.TinyTitle1 title='多阶段进度' />
        <Tiny.TinyText>分多个任务阶段的进度，每完成一个阶段的任务，就获得一个奖励。完成所有任务后，会获得所有奖励。</Tiny.TinyText>
        <Tiny.TinyTitle2 title='何时使用' />
        <Tiny.TinyText>当一个任务分成多个阶段，并需要展示展示进度或者根据进度领取奖励时使用。</Tiny.TinyText>
        <Tiny.TinyTitle2 title='注意事项' />
        <Tiny.TinyText>分阶段的进度展示，核心难点在于准确计算各个阶段的进度比例。在核心代码中已给出标准计算逻辑。</Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div className={`${styles.container} ${styles.multi}`}>
            <ProgMulti
                taskList={[250, 1000, 2500, 5000]}
                finish={multiFinish ? parseInt(multiFinish) : 0}
                width={800}
                left={[200, 400, 600, 760]}
            />
        </div>
        <Controller>
            <tbody>
                <tr>
                    <td>进度条容器宽度</td>
                    <td>width</td>
                    <td>number</td>
                    <td>800</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>进度断点定位列表</td>
                    <td>left</td>
                    <td>{'number[]'}</td>
                    <td>{'[200, 400, 600, 760]'}</td>
                    <td>-</td>
                    <td>根据设计稿设置数据即可</td>
                </tr>
                <tr>
                    <td>任务断点列表</td>
                    <td>taskList</td>
                    <td>{'number[]'}</td>
                    <td>{'[250, 1000, 2500, 5000]'}</td>
                    <td>-</td>
                    <td>根据需求设置即可</td>
                </tr>
                <tr>
                    <td>任务完成量</td>
                    <td>finish</td>
                    <td>number</td>
                    <td>0</td>
                    <td>
                        <input type="text"
                            placeholder='0'
                            value={multiFinish}
                            onChange={e => {
                                const val = e.target.value
                                if (val === '' || natureREG.test(val)) {
                                    setMultiFinish(val)
                                }
                            }}
                        />
                    </td>
                </tr>
            </tbody>
        </Controller>
        <ViewCode />
    </div>
}

export default Progress