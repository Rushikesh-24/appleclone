import Link from 'next/link'
import React from 'react'

const Vision = () => {
  return (
    <div id='vision' className="w-full h-5/6 mb-2 relative">
        <div id="text" className='absolute bottom-0 text-center left-1/2 transform -translate-x-1/2 mb-10'>
        <p className="text-5xl font-medium">Vision Pro</p>
        <p className='text-2xl'>Welcome to the era of spatial computing.</p>
        <div id="link" className="flex-row text-blue-600 p-3 text-lg">
          <Link href="" className="p-2 mr-2 hover:underline">Learn More &gt;</Link>
          <Link href="" className="p-2 ml-2 hover:underline">Buy &gt;</Link>
          </div>
        </div>
    </div>
  )
}

export default Vision