/** 滑动式时间标签页 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import { Scrollbars } from 'react-custom-scrollbars-2'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import DateSwitchTabs from '~/components/DateSwitchTabs'

const SlidingDateTabs = () => {
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
            <Tiny.TinyText>
                <Tiny.TinyTag tag='sliding date tabs' />依赖时间转换库，如<Tiny.TinyTag tag='day.js' />。当然，这也可以通过手动工具来完成。
            </Tiny.TinyText>
            <Tiny.TinyTitle2 title='何时使用' />
            <Tiny.TinyText>
                当需求中出现需要切换日期时即可使用。
            </Tiny.TinyText>
            <Tiny.TinyTitle2 title='效果展示' />
            <div className={styles.result_wrap}>
                <DateSwitchTabs />
            </div>
        </Scrollbars>
    </div>
}

export default SlidingDateTabs