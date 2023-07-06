/** 榜单列表 */
import styles from './index.module.scss'
import Scrollbars from 'react-custom-scrollbars-2'
import { kkUtils, preRoom } from '~/utils/kkUtils'

const actorList = [
    { userId: 10000338, nickname: '道具噶对佛法佛哦', portrait: '', isLive: false, score: 5470893, },
    { userId: 10000338, nickname: '打法都给人婆婆', portrait: '/portrait/20200112/3/140981192_5037489.jpg', isLive: false, score: 1572391, },
    { userId: 10000338, nickname: '飞机带几个我【我大规模', portrait: '', isLive: true, score: 1000056, },
    { userId: 10000338, nickname: '二维图【给每个么广告费隔热', portrait: '', isLive: false, score: 970004, },
    { userId: 10000338, nickname: '工匠i莫', portrait: '/portrait/20230519/23/157191306_1837505.jpg', isLive: false, score: 886521, },
    { userId: 10000338, nickname: '为婆婆天空飘起我，【给， 给', portrait: '', isLive: true, score: 735486, },
    { userId: 10000338, nickname: '啊【爱国，代码啊美容护体', portrait: '', isLive: false, score: 696969, },
    { userId: 10000338, nickname: '静安里没给头图', portrait: '', isLive: true, score: 666666, },
    { userId: 10000338, nickname: '代码3跑给i去', portrait: '', isLive: false, score: 372069, },
    { userId: 10000338, nickname: '大妈伐4打了个，给', portrait: '', isLive: false, score: 257411, },
    { userId: 10000338, nickname: '放荡人马,;JIOSIH', portrait: '', isLive: true, score: 253256, },
    { userId: 10000338, nickname: 'i分公司威威，问过我', portrait: '/portrait/20170815/10/10000576_2957916.jpg!256', isLive: false, score: 251111, },
    { userId: 10000338, nickname: '大哥，若干个，哦，发高热高热', portrait: '', isLive: false, score: 240710, },
    { userId: 10000338, nickname: 'i购买十五公分', portrait: '', isLive: true, score: 233333, },
    { userId: 10000338, nickname: '鹅肉台湾【欧气满满不过', portrait: '', isLive: false, score: 120008, },
    { userId: 10000338, nickname: '入境澳门的', portrait: '', isLive: false, score: 90235, },
    { userId: 10000338, nickname: '安东问问苹果当怕啊', portrait: '', isLive: false, score: 88888, },
    { userId: 10000338, nickname: '；安排安排跟你你萨拉', portrait: '', isLive: false, score: 77777, },
    { userId: 10000338, nickname: '位列那个面试的', portrait: '', isLive: true, score: 66666, },
    { userId: 10000338, nickname: '淡蓝；哦仍吗；的，看', portrait: '', isLive: false, score: 65565, },
    { userId: 10000338, nickname: 'vlamm;o,of盲目购买', portrait: '', isLive: true, score: 56665, },
    { userId: 10000338, nickname: '懒女阿文发明了', portrait: '', isLive: false, score: 12345, },
    { userId: 10000338, nickname: '放老实点吧 ；偏热哦', portrait: '', isLive: false, score: 6789, },
    { userId: 10000338, nickname: '埃及我陪闺蜜殴打看过', portrait: '', isLive: false, score: 5555, },
    { userId: 10000338, nickname: '拉姆法国革命', portrait: '', isLive: false, score: 2333, },
    { userId: 10000338, nickname: 'i；气泡【碰面默默地方面', portrait: '', isLive: false, score: 1145, },
    { userId: 10000338, nickname: '德米拉可是过了', portrait: '', isLive: false, score: 1024, },
    { userId: 10000338, nickname: '澳门平日钢结构i', portrait: '', isLive: false, score: 911, },
    { userId: 10000338, nickname: '暧昧来问我譬如美国', portrait: '', isLive: false, score: 886, },
    { userId: 10000338, nickname: '蛋糕胚强迫文凭大门', portrait: '', isLive: false, score: 216, },
]

const userList = [
    { userId: 10000339, nickname: '🍊4030狮子1', portrait: '/portrait/20220207/9/154968679_1458811.jpg', isLive: false, score: 3221983, },
    { userId: 10000339, nickname: 'test-blogg', portrait: '', isLive: false, score: 2627415, },
    { userId: 10000339, nickname: '.🍊4024狮子2', portrait: '', isLive: false, score: 2376548, },
    { userId: 10000339, nickname: '一二三四五六七八久十', portrait: '/portrait/20221009/13/123546128_3518677.jpg', isLive: false, score: 1945888, },
    { userId: 10000339, nickname: '非法昵称', portrait: '', isLive: false, score: 1875613, },
    { userId: 10000339, nickname: '富豪87378', portrait: '', isLive: false, score: 1568129, },
    { userId: 10000339, nickname: 'chen-test3', portrait: '', isLive: false, score: 1284562, },
    { userId: 10000339, nickname: '大佬体验非常快乐的游乐体验5410', portrait: '', isLive: false, score: 921387, },
    { userId: 10000339, nickname: '大家普工年度当u', portrait: '', isLive: false, score: 895746, },
    { userId: 10000339, nickname: '的激昂就挨打', portrait: '', isLive: false, score: 871239, },
    { userId: 10000339, nickname: '；加几个那么怕妈妈', portrait: '', isLive: false, score: 561423, },
    { userId: 10000339, nickname: '点击你档案里面呢给那你', portrait: '', isLive: false, score: 339142, },
    { userId: 10000339, nickname: '房间里你敢 刚啊', portrait: '', isLive: false, score: 336541, },
    { userId: 10000339, nickname: '的 吗民工 更多fog毛', portrait: '', isLive: false, score: 332145, },
    { userId: 10000339, nickname: '法奶农能否爱国', portrait: '', isLive: false, score: 324781, },
    { userId: 10000339, nickname: '静安寺能够感染昂', portrait: '', isLive: false, score: 259984, },
    { userId: 10000339, nickname: '大买咯哦莫抹了蜜不能拿', portrait: '', isLive: false, score: 254613, },
    { userId: 10000339, nickname: '多诺拉佛而烦恼', portrait: '', isLive: false, score: 129785, },
    { userId: 10000339, nickname: '没破哦批怒打不能够', portrait: '', isLive: false, score: 128746, },
    { userId: 10000339, nickname: '从v那就耐饿欧冠', portrait: '', isLive: false, score: 125642, },
    { userId: 10000339, nickname: '吗Dion我外婆的代价', portrait: '', isLive: false, score: 112345, },
    { userId: 10000339, nickname: '村民建仓拉佩', portrait: '', isLive: false, score: 66666, },
    { userId: 10000339, nickname: '但weep【解决的急啊领导', portrait: '', isLive: false, score: 67558, },
    { userId: 10000339, nickname: '的基督教教会历史来得及', portrait: '', isLive: false, score: 45213, },
    { userId: 10000339, nickname: '层面上理论上咯破我单独', portrait: '', isLive: false, score: 7896, },
    { userId: 10000339, nickname: '就当i我破电脑美国妇女是不会', portrait: '', isLive: false, score: 6541, },
    { userId: 10000339, nickname: '当i哦我陪你感动死了', portrait: '', isLive: false, score: 5466, },
    { userId: 10000339, nickname: '内部交流那你聚氯吗的尴尬和', portrait: '', isLive: false, score: 678, },
    { userId: 10000339, nickname: '的倒计时开始看', portrait: '', isLive: false, score: 45, },
    { userId: 10000339, nickname: '委托我的高伟光撒', portrait: '', isLive: false, score: 11, },
]

const rankList = [actorList, userList]

interface PropType {
    type?: number
}

const RankListC = ({
    type = 0,
}: PropType) => {
    return <div className={styles.rank_list}>
        <header className={styles.rank_header}>
            <p className={styles.h_1}>排名</p>
            <p className={styles.h_2}>{type ? '用户' : '主播'}</p>
            <p className={styles.h_3}>{type ? '送' : '收'}礼积分</p>
        </header>
        <div className={styles.rank_main}>
            <Scrollbars autoHide>
                <ul className={styles.rank_ul}>
                    {
                        rankList[type].map((v, i) => {
                            return <li key={i} className={styles.rank_li}>
                                <p className={styles.sort}>{i + 1}</p>
                                <a className={styles.avatar}
                                    href={`${preRoom}${v.userId || 0}`}
                                    target="_blank"
                                    style={{cursor: type ? 'default' : ''}}
                                    onClick={(e) => {
                                        if (!v.userId || type) {
                                            e.preventDefault()
                                        }
                                    }}
                                >
                                    <img src={kkUtils.joinAvatarUrl(null, v.portrait, 128)} alt="" />
                                    {
                                        v.isLive
                                            ? <div className={styles.live}></div>
                                            : null
                                    }
                                </a>
                                <p className={styles.nick}>{v.nickname || '虚位以待'}</p>
                                <p className={styles.score}>{v.score || '--'}</p>
                            </li>
                        })
                    }
                </ul>
            </Scrollbars>
        </div>
    </div>
}

export default RankListC