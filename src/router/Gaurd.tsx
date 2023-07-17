/** 路由守卫 */
import { Suspense, FC, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Spin from "~/components/Spin";
import { KK_UI_USER_INFO, getQueryString } from "~/utils/kkUtils";

interface PropType {
    Component: FC;
}

const GaurdRouter = ({ Component }: PropType) => {

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem(KK_UI_USER_INFO)

        if ((location.pathname !== '/' && location.pathname !== '/overview') && !userInfo) {
            navigate("/login")
            return
        }
        
        if (location.pathname === '/') {
            getQueryString('login')
                ? navigate('/overview?login=true', { replace: true })
                : navigate('/overview', { replace: true })
        }
    }, [location.href])

    return <Suspense fallback={<Spin />}>
        <Component />
    </Suspense>
}

export const gaurd = (Component: FC) => {
    return <GaurdRouter Component={Component} />
}