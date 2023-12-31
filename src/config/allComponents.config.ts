/** 组件总览中的组件展示 */
const awardPreviewListImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8CC_Tbe3_e4AAAAAAAAAAAAADrJ8AQ/original'
const popupImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6RWNQ78WtvEAAAAAAAAAAAAADrJ8AQ/original'
const slidingDateTabsImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*72NDQqXkyOEAAAAAAAAAAAAADrJ8AQ/original'
const badgeImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e0qITYqF394AAAAAAAAAAAAADrJ8AQ/original'
const progressImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gK_4S6fDRfgAAAAAAAAAAAAADrJ8AQ/original'
const turnPageImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EYuhSpw1iSwAAAAAAAAAAAAADrJ8AQ/original'
const toastImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Ct7bT7rrTTAAAAAAAAAAAAAADrJ8AQ/original'
const hoverPopImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6RWNQ78WtvEAAAAAAAAAAAAADrJ8AQ/original'
const ranklistImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EYuhSpw1iSwAAAAAAAAAAAAADrJ8AQ/original'
const lotteryListImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FbOCS6aFMeUAAAAAAAAAAAAADrJ8AQ/original'
const prixSwiperImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KeyQQL5iKkkAAAAAAAAAAAAADrJ8AQ/original'
const scrollBarImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*TBTSR4PyVmkAAAAAAAAAAAAADrJ8AQ/original'

type ViewKeyType = 'name' | 'component' | 'url' | 'route'
type ViewType = Record<ViewKeyType, string>

export const viewComponents: ViewType[] = [
    { name: '奖励预览列表', component: 'AwardPreviewList', url: awardPreviewListImg, route: 'award-preview-list' },
    { name: '弹出框', component: 'Popup', url: popupImg, route: 'popup' },
    { name: '滑动式时间标签页', component: 'SlidingDateTabs', url: slidingDateTabsImg, route: 'sliding-date-tabs' },
    { name: '徽标数', component: 'Badge', url: badgeImg, route: 'badge' },
    { name: '进度条', component: 'Progress', url: progressImg, route: 'progress' },
    { name: '上下页', component: 'TurnPage', url: turnPageImg, route: 'turn-page' },
    { name: '轻提示', component: 'Toast', url: toastImg, route: 'toast' },
    { name: '悬浮提示框', component: 'HoverPop', url: hoverPopImg, route: 'hover-pop' },
    { name: '榜单列表', component: 'RankList', url: ranklistImg, route: 'rank-list' },
    { name: '连抽奖励列表', component: 'LotteryList', url: lotteryListImg, route: 'lottery-list' },
    { name: '大奖轮播', component: 'PrixSwiper', url: prixSwiperImg, route: 'prix-swiper' },
    { name: '滚动条', component: 'Scrollbar', url: scrollBarImg, route: 'scroll-bar' },
]