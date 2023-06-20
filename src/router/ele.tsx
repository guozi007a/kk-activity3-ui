import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { gaurd } from './Gaurd'

const Basic = lazy(() => import('~/pages/Basic'))
const OverView = lazy(() => import('~/pages/OverView'))
const AwardPreviewList = lazy(() => import('~/pages/AwardPreviewList'))

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
        ]
    },
    {
        path: '*',
        element: <div>No Found.</div>
    }
]