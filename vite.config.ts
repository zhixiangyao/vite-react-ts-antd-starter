import { resolve } from 'path'
import fs from 'fs'

import dotenv from 'dotenv'
import { defineConfig, type UserConfig, type ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import checker from 'vite-plugin-checker'

const baseConfig: UserConfig = {
  plugins: [react(), checker({ typescript: true }), viteCompression()],
  resolve: {
    alias: [{ find: '/@', replacement: resolve(__dirname, './src') }],
  },
}

export default ({ command, mode }: ConfigEnv) => {
  const { VITE_APP_NODE_ENV, VITE_APP_TITLE } = dotenv.parse(fs.readFileSync(`.env.${mode}`))

  console.log('\x1b[33m%s\x1b[0m', `🏭--NODE 环境 (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)
  console.log('\x1b[36m%s\x1b[0m', `🏠--APP 标题 (VITE_APP_TITLE): ${VITE_APP_TITLE}`)

  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  } else {
    return defineConfig({
      ...baseConfig,
    })
  }
}
