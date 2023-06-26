/** 滑动式时间标签页 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import { Scrollbars } from 'react-custom-scrollbars-2'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import DateSwitchTabs, { ParamType } from '~/components/DateSwitchTabs'
import { useState } from 'react'

const REG = /^[0-9]\d*$/
const DATE_REG = /^(202)[3-9]\/(0|1)[0-9]\/[0-3][0-9]$/

const SlidingDateTabs = () => {

    const [width, setWidth] = useState('120')
    const [height, setHeight] = useState('40')
    const [gap, setGap] = useState('20')
    const [count, setCount] = useState('5')
    const [startStr, setStartStr] = useState('')
    const [endStr, setEndStr] = useState('')
    const [limits, setLimits] = useState('30')
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(0)

    const handleDate = (param?: ParamType) => {
        console.log('date-param: ', param)
    }

    return <div className={styles.sliding_date_tabs}>
        <Scrollbars autoHide>
            <Tiny.TinyTitle1 title='滑动式时间标签页' />
            <Tiny.TinyText>
                有些活动中会出现日期榜单，这些榜单根据不同的日期显示不同的榜单内容。这种日期的切换，是通过<Tiny.TinyTag tag='tabs' />标签页按钮来完成的。就像下面这样：
            </Tiny.TinyText>
            <Tiny.TinyImg url='https://github.com/guozi007a/kk-activity3-ui/assets/58798241/7d2b1814-4d5d-423d-9fdb-704c93e79aa1' />
            <Tiny.TinyImg url='https://github.com/guozi007a/kk-activity3-ui/assets/58798241/88b512e0-df3b-464e-b23f-0943c0e5a8e3' />
            <Tiny.TinyText>
                每个活动会有开始时间和结束时间，在很多情况下，开始时间点和结束时间点都不是固定的，都是随时需要通过配置进行修改的。所以，标签的个数就是可变动的，
                而且是随着配置时间变动的。在不同的宽度的页面中，还需要显示出不同宽度的标签，这些都需要是可配置的。
            </Tiny.TinyText>
            <Tiny.TinyTitle2 title='何时使用' />
            <Tiny.TinyText>
                当需求中出现需要切换日期时即可使用。
            </Tiny.TinyText>
            <Tiny.TinyTitle2 title='注意事项' />
            <Tiny.TinyText>
                <Tiny.TinyTag tag='sliding date tabs' />依赖时间转换库，如<Tiny.TinyTag tag='day.js' />。当然，这也可以通过手动工具来完成。
            </Tiny.TinyText>
            <Tiny.TinyText>
                另外，注意后端时间戳的配置，如果配置方式有修改，须先和测试人员确认新的配置方式。
            </Tiny.TinyText>
            <Tiny.TinyText>
                IOS系统可能不支持<Tiny.TinyTag tag='gap' />属性，所以在使用示例代码时，不推荐将<Tiny.TinyTag tag='margin' />属性修改为<Tiny.TinyTag tag='gap' />。
            </Tiny.TinyText>
            <Tiny.TinyText>
                IOS不支持通过<Tiny.TinyTag tag='-' />连接的年月日时间格式，也不支持毫秒级以下的时间戳，在使用<Tiny.TinyTag tag='new Date' />方法时需要避免此处Bug。
            </Tiny.TinyText>
            <Tiny.TinyTitle2 title='效果展示' />
            <div className={styles.result_wrap}>
                <DateSwitchTabs
                    tabWidth={width ? parseInt(width) : 0}
                    tabHeight={height ? parseInt(height) : 0}
                    gap={gap ? parseInt(gap) : 0}
                    count={count ? parseInt(count) : 0}
                    limits={limits ? parseInt(limits) : 0}
                    start={start || 1687489200000}
                    end={end || 1688227200000}
                    onDate={handleDate}
                />
            </div>
            <Tiny.TinyTitle2 title='控制器' />
            <Controller>
                <tbody>
                    <tr>
                        <td>tab宽度</td>
                        <td>tabWidth</td>
                        <td>number</td>
                        <td>120</td>
                        <td>
                            <input type="text"
                                value={width}
                                onChange={(e) => {
                                    const val = e.target.value
                                    if (val === '' || REG.test(val)) {
                                        setWidth(val)
                                    }
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>tab高度</td>
                        <td>tabHeight</td>
                        <td>number</td>
                        <td>40</td>
                        <td>
                            <input type="text"
                                value={height}
                                onChange={(e) => {
                                    const val = e.target.value
                                    if (val === '' || REG.test(val)) {
                                        setHeight(val)
                                    }
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>tab间距</td>
                        <td>gap</td>
                        <td>number</td>
                        <td>20</td>
                        <td>
                            <input type="text"
                                value={gap}
                                onChange={(e) => {
                                    const val = e.target.value
                                    if (val === '' || REG.test(val)) {
                                        setGap(val)
                                    }
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>tab可见数量</td>
                        <td>count</td>
                        <td>number</td>
                        <td>5</td>
                        <td>
                            <input type="text"
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
                        <td>活动天数限制</td>
                        <td>limits</td>
                        <td>number</td>
                        <td>30</td>
                        <td>
                            <input type="text"
                                value={limits}
                                onChange={(e) => {
                                    const val = e.target.value
                                    if (val === '' || REG.test(val)) {
                                        setLimits(val)
                                    }
                                }}
                            />
                        </td>
                        <td>时间配置错误可能导致超限</td>
                    </tr>
                    <tr>
                        <td>开始时间</td>
                        <td>start</td>
                        <td>number</td>
                        <td>1687489200000</td>
                        <td>
                            <input type="text"
                                placeholder='2023/06/23'
                                value={startStr}
                                onChange={(e) => {
                                    const val = e.target.value
                                    if (val === '' || REG.test(val)) {
                                        setStartStr(val)
                                    }
                                }}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    if (DATE_REG.test(startStr)) {
                                        setStart(new Date(startStr + '  11:00:00').getTime())
                                    }
                                }}
                            >确认</button>
                        </td>
                    </tr>
                    <tr>
                        <td>结束时间</td>
                        <td>end</td>
                        <td>number</td>
                        <td>1688227200000</td>
                        <td>
                            <input type="text"
                                placeholder='2023/07/02'
                                value={endStr}
                                onChange={(e) => {
                                    const val = e.target.value
                                    if (val === '' || REG.test(val)) {
                                        setEndStr(val)
                                    }
                                }}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    if (DATE_REG.test(endStr)) {
                                        setEnd(new Date(endStr + '  00:00:00').getTime())
                                    }
                                }}
                            >确认</button>
                        </td>
                    </tr>
                    <tr>
                        <td>获取tab日期数据</td>
                        <td>onDate</td>
                        <td>{'(param?: ParamType) => void'}</td>
                        <td>null</td>
                        <td></td>
                        <td>操作tab时打开控制台即可看到日期数据</td>
                    </tr>
                </tbody>
            </Controller>
            <ViewCode />
        </Scrollbars>
    </div>
}

export default SlidingDateTabs