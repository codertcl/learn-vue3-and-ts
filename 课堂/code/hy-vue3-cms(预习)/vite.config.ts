import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { createVitePlugins } from './build/vite/plugin'

const pathResolve = (dirPath) => path.resolve(process.cwd(), dirPath)

// https://vitejs.dev/config/
export default ({ command }) => {
  console.log('command=', command)
  const isBuild = command === 'build' // command = serve or build
  return defineConfig({
    plugins: [vue(), ...createVitePlugins(isBuild)],
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: `${pathResolve('src')}/`
        }
      ]
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://152.136.185.210:5000',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, '')
        }
      }
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    }
  })
}
