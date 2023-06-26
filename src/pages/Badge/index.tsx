/** 徽标数 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import BadgeC from '~/components/BadgeC'
import { natureREG as REG } from '~/utils/kkUtils'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import { useState } from 'react'
import { badgeCodes } from '~/config/badgeCodes'

const Badge = () => {

    const [count, setCount] = useState('')
    const [showZero, setShowZero] = useState(false)
    const [critical, setCritical] = useState('')
    const [onlydot, setOnlydot] = useState(false)

    return <div className={styles.badge}>
        <Tiny.TinyTitle1 title='徽标数' />
        <Tiny.TinyText>图标右上角的圆形徽标数字。</Tiny.TinyText>
        <Tiny.TinyTitle2 title='何时使用' />
        <Tiny.TinyText>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div className={styles.medium}>
            <BadgeC
                count={count ? parseInt(count) : 0}
                showZero={showZero}
                critical={critical ? parseInt(critical) : 0}
                onlydot={onlydot}
            />
        </div>
        <Tiny.TinyTitle2 title='控制器' />
        <Controller>
            <tbody>
                <tr>
                    <td>数量</td>
                    <td>count</td>
                    <td>number</td>
                    <td>0</td>
                    <td>
                        <input type="text"
                            placeholder='0'
                            value={count}
                            onChange={(e) => {
                                const val = e.target.value
                                if (val === '' || REG.test(val)) {
                                    setCount(val)
                                }
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>数量为0时，是否显示徽标</td>
                    <td>showZero</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>
                        <label htmlFor="showzero1">
                            <input type="radio" name="showzero" id="showzero1" value={1} checked={showZero}
                                onChange={() => {
                                    setShowZero(true)
                                }}
                            /> 是
                        </label>
                        <label htmlFor="showzero2">
                            <input type="radio" name="showzero" id="showzero2" value={0} checked={!showZero}
                                onChange={() => {
                                    setShowZero(false)
                                }}
                            /> 否
                        </label>
                    </td>
                    <td>默认为false，即当数量为0时，不显示徽标。</td>
                </tr>
                <tr>
                    <td>临界值</td>
                    <td>critical</td>
                    <td>number</td>
                    <td>0</td>
                    <td>
                        <input type="text"
                            placeholder='0'
                            value={critical}
                            onChange={(e) => {
                                const val = e.target.value
                                if (val === '' || REG.test(val)) {
                                    setCritical(val)
                                }
                            }}
                        />
                    </td>
                    <td>临界值为0时，表示不设置。设置临界值后，如果count超过临界值，就会显示n+的形式</td>
                </tr>
                <tr>
                    <td>只显示红点，不显示数值</td>
                    <td>onlydot</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>
                        <label htmlFor="onlydot1">
                            <input type="radio" name="onlydot" id="onlydot1" value={1} checked={onlydot}
                                onChange={() => {
                                    setOnlydot(true)
                                }}
                            /> 是
                        </label>
                        <label htmlFor="onlydot2">
                            <input type="radio" name="onlydot" id="onlydot2" value={0} checked={!onlydot}
                                onChange={() => {
                                    setOnlydot(false)
                                }}
                            /> 否
                        </label>
                    </td>
                    <td>默认false，即会同时显示红点和数值。设置为true时，就只显示红点，不显示数值</td>
                </tr>
            </tbody>
        </Controller>
        <ViewCode codes={badgeCodes} />
    </div>
}

export default Badge