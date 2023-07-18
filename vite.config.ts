import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BackEndOrigin = 'http://localhost:5501'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3001,
        proxy: {
            '/login/github': BackEndOrigin,
            '/callback/github': BackEndOrigin,
            '/login/gitee': BackEndOrigin,
            '/callback/gitee': BackEndOrigin,
            '/user': BackEndOrigin,
            '/logout': BackEndOrigin,
        }
    },
    resolve: {
        alias: {
            // 必须写成'/src/'这种绝对路径的形式，否则无效
            "~/": "/src/"
        }
    }
})
