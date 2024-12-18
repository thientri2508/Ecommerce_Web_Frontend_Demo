import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ecommerce_Web_Frontend_Demo/',
  optimizeDeps: {
      include: ['react-quill'],
  },
resolve: {},
server: {
  host: true, // hoặc '0.0.0.0' nếu cần chỉ định cụ thể
  port: 5173, // cổng tùy chỉnh
}

})
