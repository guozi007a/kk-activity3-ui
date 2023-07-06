/** 榜单列表 */
import styles from './index.module.scss'
import * as Tiny from '~/components/Tinys'
import Controller from '~/components/Controller'
import ViewCode from '~/components/ViewCode'
import { useState } from 'react'
import RankListC from '~/components/RankListC'

const RankList = () => {
    return <div className={styles.rank_list}>
        <Tiny.TinyTitle1 title='榜单列表' />
        <Tiny.TinyText>
            活动项目中最常用的列表之一，用于展示主播和用户的活动参与度。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='榜单规则' />
        <Tiny.TinyText>
            榜单有很多种，常见的有月榜单，周榜单，主播榜单，用户榜单，总榜等。主播榜单中，点击主播头像是可以跳转到直播间的，而且开播的主播会显示开播状态。
        </Tiny.TinyText>
        <Tiny.TinyTitle2 title='效果展示' />
        <div style={{ margin: '2rem' }}>
            <RankListC />
        </div>
        <Tiny.TinyTitle2 title='控制器' />
        <Controller></Controller>
        <ViewCode />
    </div>
}

export default RankList



