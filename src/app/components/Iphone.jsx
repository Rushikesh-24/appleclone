import Link from 'next/link'
import React from 'react'

const Iphone = () => {
  return (
    <div id="iphone" className='w-screen h-4/5'>
        <div id="text" className='flex flex-col justify-center items-center'>
            <p className="text-5xl font-semibold p-1 mt-10">iPhone 15</p>
            <p className="text-2xl font-normal p-2">New Camera. New design. Newphoria</p>
       
        <div id="link" className="flex-row text-blue-400 p-3 text-xl">
          <Link href="" className="p-2 mr-2 hover:underline">Learn More &gt;</Link>
          <Link href="" className="p-2 ml-2 hover:underline">Buy &gt;</Link>
          </div> </div>
    </div>
  )
}

export default Iphone