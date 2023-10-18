import React, { memo } from 'react'

import { Page } from '/@/components/Page'

export const TestPage = memo(() => {
  return <Page headerLess>Test</Page>
})
TestPage.displayName = 'TestPage'
