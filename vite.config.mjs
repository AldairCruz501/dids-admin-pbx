import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import autoprefixer from 'autoprefixer'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: `Administrador de DID´s`,
          short_name: 'AdminApp',
          description: 'Aplicación de administración con Vue 3 y CoreUI',
          theme_color: '#0d6efd',
          background_color: '#2a303d',
          display: 'standalone',
          start_url: '/',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          // Aquí aumentamos el límite a 5MB
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        }
      })
    ],
    base: './',
    css: {
      postcss: {
        plugins: [
          autoprefixer({}),
        ],
      },
    },
    resolve: {
      alias: [
        {
          find: /^~(.*)$/,
          replacement: '$1',
        },
        {
          find: '@/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, '/src'),
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss'],
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'https://api.cero208.mx',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
        '/ping': {
          target: 'https://api.cero208.mx',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/ping/, '/ping'),
        },
      },
    },
  }
})
