import { resolve } from 'path'
import fs from 'fs'
import dotenv from 'dotenv' // Dotenv 是一个零依赖的模块，它能将 env 变量中的变量从 '.env*' file 提取
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'

import type { UserConfigExport } from 'vite'

interface ENV {
  [K: string]: string
}

export const getEnv = (mode: string): ENV => {
  const envFiles = [`.env.${mode}`]

  for (const envFile of envFiles) {
    try {
      const env = Object.create(null)
      const envConfig = dotenv.parse(fs.readFileSync(envFile))
      for (const k in envConfig) Object.assign(env, { [k]: envConfig[k] })
      return env
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * https://vitejs.dev/config/
 */
const userConfig = defineConfig({
  plugins: [reactRefresh(), WindiCSS()],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
})

export default ({ command, mode }): UserConfigExport => {
  /**
   * Such as:
   * import.meta.env.MODE: {string}     app runtime 的模式.
   * import.meta.env.BASE_URL: {string} 部署 app 时的基本 URL. 他由 base 配置项决定.
   * import.meta.env.PROD: {boolean}    app 是否 runtime 在生产环境.
   * import.meta.env.DEV: {boolean}     app 是否 runtime 在开发环境 (永远与 import.meta.env.PROD 相反).
   */

  const { VITE_APP_NODE_ENV, VITE_APP_TITLE } = getEnv(mode)

  setTimeout(() => {
    console.log()
    console.log('\x1b[33m%s\x1b[0m', `🏭--NODE 环境 (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)
    console.log('\x1b[36m%s\x1b[0m', `🏠--APP 标题 (VITE_APP_TITLE): ${VITE_APP_TITLE}`)
    console.log()
  }, 66)

  if (command === 'serve') {
    return userConfig
  } else {
    return userConfig
  }
}
