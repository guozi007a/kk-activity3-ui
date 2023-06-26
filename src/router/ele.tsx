import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { gaurd } from './Gaurd'

const Basic = lazy(() => import('~/pages/Basic'))
const OverView = lazy(() => import('~/pages/OverView'))
const AwardPreviewList = lazy(() => import('~/pages/AwardPreviewList'))
const Popup = lazy(() => import('~/pages/Popup'))
const SlidingDateTabs = lazy(() => import('~/pages/SlidingDateTabs'))
const Badge = lazy(() => import('~/pages/Badge'))

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
        ]
    },
    {
        path: '*',
        element: <div>No Found.</div>
    }
]