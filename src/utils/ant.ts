import type { ConfigProviderProps } from 'antd'

export function getPopupContainerConfig(): HTMLElement {
  return window.document.body
}

export const formConfig: ConfigProviderProps['form'] = {
  validateMessages: {},
}

export const rules = {}
