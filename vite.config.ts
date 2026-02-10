import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages 项目页需要设置 base 为仓库名
  // 对应的访问地址为：https://i0Ek3.github.io/media-converter
  base: '/media-converter/',
  plugins: [react()],
  server: {
    cors: true,
    headers: {
      // 解决 ffmpeg.wasm CORS 问题
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
});