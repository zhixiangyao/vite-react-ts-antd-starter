import type { ConfigProviderProps } from 'antd/es/config-provider'

export function getPopupContainerConfig(): HTMLElement {
  return window.document.body
}

export const formConfig: ConfigProviderProps['form'] = {
  validateMessages: {},
}

export const rules = {}
