import React from 'react'

const Spinner = () => {
  return (
    <div className='fixed inset-0 bg-black z-10 flex items-center justify-center opacity-80'>
        <div className='w-10 h-10 border-4 border-dashed border-white border-t-transparent rounded-full animate-spin'>

        </div>
    </div>
  )
}

export default Spinner