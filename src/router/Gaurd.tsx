/** 路由守卫 */
import { Suspense, FC, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Spin from "~/components/Spin";

interface PropType {
    Component: FC;
}

const GaurdRouter = ({ Component }: PropType) => {

    const navigate = useNavigate();

    useEffect(() => {
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