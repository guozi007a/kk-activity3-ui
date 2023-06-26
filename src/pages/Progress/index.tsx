/** 任务进度条 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import ProgSimple from '~/components/ProgBar/Simple'
import { useState } from 'react'
import { natureREG } from '~/utils/kkUtils'
import { progSimpleCodes } from '~/config/progSimpleCodes'

const Progress = () => {

    const [simTask, setSimTask] = useState('')
    const [simFinish, setSimFinish] = useState('')

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
    </div>
}

export default Progress