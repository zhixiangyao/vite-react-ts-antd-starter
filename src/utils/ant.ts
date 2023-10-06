import type { ConfigProviderProps } from 'antd/es/config-provider'

export const getPopupContainerConfig = (): HTMLElement => {
  return window.document.body
}

export const formConfig: ConfigProviderProps['form'] = {
  validateMessages: {
    required: '${label} is required',
  },
}

export const rules = {}
