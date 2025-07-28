import React from 'react'
import Crosshair from './Crosshair'

const CrosshairStep = ({containerRef, handleClick}) => {
  return (
    <>
    <Crosshair containerRef={containerRef} color='#ffffff'/>
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
      <div>
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        <h1 className='text-5xl text-white font-bold'>
          <button onClick={handleClick} className='animate-pulse hover:scale-110 hover:text-red-600 transition-all cursor-crosshair'>Lets Start!</button>
        </h1>
      </div>
      </div>
    </div>
    </>
  )
}

export default CrosshairStep