/** 路由守卫 */
import { Suspense, FC, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Spin from "~/components/Spin";
import { useInfoStore } from '~/store/useInfoStore'
import { toast } from "~/components/ToastGlobal";

interface PropType {
    Component: FC;
}

const GaurdRouter = ({ Component }: PropType) => {

    const navigate = useNavigate();
    const userInfo = useInfoStore(state => state.userInfo)

    useEffect(() => {
        const path = location.pathname

        if (userInfo.isRefresh) {
            if ((path !== '/' && path !== '/overview') && !userInfo.username) {
                navigate("/login")
                return
            }
    
            if (!(path === '/' || path === '/overview') && !userInfo.access) {
                toast.warn('抱歉，你没有访问权限~')
                navigate('/overview')
                return
            }
        }

        if (path === '/') {
            navigate('/overview', { replace: true })
        }
    }, [location.pathname, userInfo.isRefresh])

    return <Suspense fallback={<Spin />}>
        <Component />
    </Suspense>
}

export const gaurd = (Component: FC) => {
    return <GaurdRouter Component={Component} />
}