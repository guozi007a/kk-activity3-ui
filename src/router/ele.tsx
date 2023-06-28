import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { gaurd } from './Gaurd'

const Basic = lazy(() => import('~/pages/Basic'))
const OverView = lazy(() => import('~/pages/OverView'))
const AwardPreviewList = lazy(() => import('~/pages/AwardPreviewList'))
const Popup = lazy(() => import('~/pages/Popup'))
const SlidingDateTabs = lazy(() => import('~/pages/SlidingDateTabs'))
const Badge = lazy(() => import('~/pages/Badge'))
const Progress = lazy(() => import('~/pages/Progress'))
const TurnPage = lazy(() => import('~/pages/TurnPage'))
const Toast = lazy(() => import('~/pages/Toast'))

export const ele: RouteObject[] = [
    {
        path: '/',
        element: gaurd(Basic),
        children: [
            {
                path: 'overview',
                element: gaurd(OverView)
            },
            {
                path: 'award-preview-list',
                element: gaurd(AwardPreviewList)
            },
            {
                path: 'popup',
                element: gaurd(Popup)
            },
            {
                path: 'sliding-date-tabs',
                element: gaurd(SlidingDateTabs)
            },
            {
                path: 'badge',
                element: gaurd(Badge)
            },
            {
                path: 'progress',
                element: gaurd(Progress)
            },
            {
                path: 'turn-page',
                element: gaurd(TurnPage)
            },
            {
                path: 'toast',
                element: gaurd(Toast)
            },
        ]
    },
    {
        path: '*',
        element: <div>No Found.</div>
    }
]