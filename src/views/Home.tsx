import React, { useState, useEffect } from 'react'
import { Observer } from 'mobx-react'
import { Button } from 'antd'

import { useLocalStore } from '/@/hooks'

function Home() {
  const [count, setCount] = useState(0)
  const localStore = useLocalStore()

  useEffect(() => console.log('componentDidMount!'), [])

  useEffect(() => console.log('componentDidMount-and-componentDidUpdate!'))

  useEffect(() => {
    console.log('componentDidMount~')

    return () => console.log('componentWillUnmount~')
  }, [])

  useEffect(() => console.log('count update~'), [count])

  return (
    <Observer>
      {() => (
        <>
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>

          <Button type="primary" className="mt-3" onClick={() => localStore.setCount()}>
            mobxCount is: {localStore.count}
          </Button>
        </>
      )}
    </Observer>
  )
}

export default Home
