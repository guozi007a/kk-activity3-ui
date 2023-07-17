/** 路由守卫 */
import { Suspense, FC, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Spin from "~/components/Spin";
import { KK_UI_USER_INFO } from "~/utils/kkUtils";

interface PropType {
    Component: FC;
}

const GaurdRouter = ({ Component }: PropType) => {

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem(KK_UI_USER_INFO)

        if (!userInfo) {
            navigate("/login")
            return
        }
        
        if (location.pathname === '/') {
            navigate('/overview', { replace: true })
        }
    }, [location.pathname])

    return <Suspense fallback={<Spin />}>
        <Component />
    </Suspense>
}

export const gaurd = (Component: FC) => {
    return <GaurdRouter Component={Component} />
}