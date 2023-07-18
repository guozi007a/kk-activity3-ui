import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3001,
        proxy: {
            '/login/github': 'http://localhost:5501',
            '/callback/github': 'http://localhost:5501',
            '/login/gitee': 'http://localhost:5501',
            '/callback/gitee': 'http://localhost:5501',
            '/user': 'http://localhost:5501',
            '/logout': 'http://localhost:5501',
        }
    },
    resolve: {
        alias: {
            // 必须写成'/src/'这种绝对路径的形式，否则无效
            "~/": "/src/"
        }
    }
})
