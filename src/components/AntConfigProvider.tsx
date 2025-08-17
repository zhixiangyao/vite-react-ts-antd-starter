import type { ConfigProviderProps, ThemeConfig } from 'antd'
import type { ReactNode } from 'react'
import { ConfigProvider, theme } from 'antd'
import { useMemo } from 'react'

const { darkAlgorithm, defaultAlgorithm } = theme

const formConfig: ConfigProviderProps['form'] = {
  validateMessages: {
    required: '${label} is a required field!',
  },
}

const getPopupContainerConfig: ConfigProviderProps['getPopupContainer'] = () => {
  return document.body
}

interface Props {
  children: ReactNode
}

function AntConfigProvider({ children }: Props) {
  const theme = useMemo<ThemeConfig>(() => {
    const isDark = document.documentElement.classList.contains('dark')

    return {
      algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
    }
  }, [])

  return (
    <ConfigProvider theme={theme} form={formConfig} getPopupContainer={getPopupContainerConfig}>
      {children}
    </ConfigProvider>
  )
}

export { AntConfigProvider }
