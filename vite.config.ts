import type { ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'

const baseConfig: UserConfig = {
  plugins: [react(), checker({ typescript: true }), viteCompression(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
}

export default ({ command }: ConfigEnv) => {
  if (command === 'serve') {
    return defineConfig(baseConfig)
  }
  else {
    return defineConfig(baseConfig)
  }
}
