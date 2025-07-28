import React from 'react'

const UnlockedContent = ({username}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center px-5'>
    <div className='bg-black/50 p-8 rounded-lg text-center'>
      <h2 className='text-3xl text-yellow-300 font-bold mb-4'>All Features Unlocked!</h2>
      <p className='text-white text-lg'>
        Congratulations, {username || 'traveler'}! You've completed the introduction.
      </p>
      <p className='text-white text-lg mt-4'>
        Now you can explore all menu items in the navigation bar above.
      </p>
      <div className='mt-6 flex justify-center'>
        <div className='bg-green-600 px-4 py-2 text-white rounded-lg animate-pulse'>
          Try clicking on different menu items now!
        </div>
      </div>
    </div>
  </div>
  )
}

export default UnlockedContent