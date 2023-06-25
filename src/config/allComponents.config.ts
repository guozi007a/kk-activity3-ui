/** 组件总览中的组件展示 */
const awardPreviewListImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8CC_Tbe3_e4AAAAAAAAAAAAADrJ8AQ/original'
const popupImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6RWNQ78WtvEAAAAAAAAAAAAADrJ8AQ/original'
const slidingDateTabsImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*72NDQqXkyOEAAAAAAAAAAAAADrJ8AQ/original'
const badgeImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e0qITYqF394AAAAAAAAAAAAADrJ8AQ/original'
const progressImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gK_4S6fDRfgAAAAAAAAAAAAADrJ8AQ/original'
const turnPageImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EYuhSpw1iSwAAAAAAAAAAAAADrJ8AQ/original'
const toastImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Ct7bT7rrTTAAAAAAAAAAAAAADrJ8AQ/original'
const hoverPopImg = 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6RWNQ78WtvEAAAAAAAAAAAAADrJ8AQ/original'

export const viewComponents = [
    { name: '奖励预览列表', component: 'AwardPreviewList', url: awardPreviewListImg, route: 'award-preview-list' },
    { name: '弹出框', component: 'Popup', url: popupImg, route: 'popup' },
    { name: '滑动式时间标签页', component: 'SlidingDateTabs', url: slidingDateTabsImg, route: 'sliding-date-tabs' },
    { name: '徽标数', component: 'Badge', url: badgeImg, route: 'badge' },
    { name: '进度条', component: 'Progress', url: progressImg, route: 'progress' },
    { name: '上下页', component: 'TurnPage', url: turnPageImg, route: 'turn-page' },
    { name: '全局提示', component: 'Toast', url: toastImg, route: 'toast' },
    { name: '悬浮提示框', component: 'HoverPop', url: hoverPopImg, route: 'hover-pop' },
]