/** 获取当前路由路径 */
import { useState, useEffect } from 'react'

const useLocalPath = () => {
    const [path, setPath] = useState('')

    useEffect(() => { 
        const localPath = location.pathname
        setPath(localPath ?? '')
    }, [path])

    return path
}

export default useLocalPath