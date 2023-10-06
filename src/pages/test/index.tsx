import React, { memo } from 'react'

import { Page } from '/@/components/Page'

const TestPage = memo(() => {
  return <Page headerLess>Test</Page>
})
TestPage.displayName = 'TestPage'

export default TestPage
