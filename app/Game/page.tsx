import React from 'react'

type Props = {}

const Game = (props: Props) => {
  return (
    <iframe className='w-full min-h-[800px] scale-75 relative bottom-[6.5rem]' src="/PlayBricks WebGL/index.html" />
  )
}

export default Game