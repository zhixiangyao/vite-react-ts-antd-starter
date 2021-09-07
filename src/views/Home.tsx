import React, { useState, useEffect } from 'react'
import { Observer } from 'mobx-react'
import styled from 'styled-components'

import { useLocalStore } from '/@/hooks'

const Button = styled.button`
  font-size: calc(10px + 2vmin);
`

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
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>

          <Button type="button" onClick={() => localStore.setCount()}>
            mobxCount is: {localStore.count}
          </Button>
        </>
      )}
    </Observer>
  )
}

export default Home
