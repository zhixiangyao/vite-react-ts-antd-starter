import type { ConfigEnv, UserConfig } from 'vite'
import fs from 'node:fs'

import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'

const baseConfig: UserConfig = {
  plugins: [react(), checker({ typescript: true }), viteCompression()],
  resolve: {
    alias: [{ find: '/@', replacement: resolve(__dirname, './src') }],
  },
}

export default ({ command, mode }: ConfigEnv) => {
  const { VITE_APP_NODE_ENV, VITE_APP_TITLE } = dotenv.parse(fs.readFileSync(`.env.${mode}`))

  console.log('\x1B[33m%s\x1B[0m', `🏭--NODE 环境 (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)
  console.log('\x1B[36m%s\x1B[0m', `🏠--APP 标题 (VITE_APP_TITLE): ${VITE_APP_TITLE}`)

  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  }
  else {
    return defineConfig({
      ...baseConfig,
    })
  }
}
