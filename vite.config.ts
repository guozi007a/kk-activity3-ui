import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3001,
        proxy: {
            '/callback/github': 'http://localhost:4000'
        }
    },
    resolve: {
        alias: {
            // 必须写成'/src/'这种绝对路径的形式，否则无效
            "~/": "/src/"
        }
    }
})
