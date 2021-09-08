import React from 'react'

const Main: React.FC = ({ children }) => {
  return (
    <main
      className={`flex text-black items-center justify-start flex-col h-full pt-20 sm:pr-4 sm:pb-4 sm:pl-4 overflow-auto`}
    >
      {children}
    </main>
  )
}

export default Main
