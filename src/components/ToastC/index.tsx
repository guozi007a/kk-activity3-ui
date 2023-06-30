/** 全局轻提示入口文件 */
import { useState } from 'react'
import Containers from './Containers'

const useToast = () => {
    const [api, setApi] = useState({})

    const getAPI = (obj: {}) => {
        setApi(obj)
        console.log('@@')
    }

    const containers: any = (<Containers getAPI={getAPI} />)

    return [api, containers]
}

export default useToast