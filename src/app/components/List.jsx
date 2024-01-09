import Link from 'next/link'
import React from 'react'

const List = () => {
  return (
    <>
    <div id='grid' className='w-screen p-6'>
      <div id='series9'>
        <div id="text" className='flex flex-col justify-center items-center mt-16'>
        <p className='text-white text-3xl font-semibold'> WATCH</p>
        <p className='text-red-600 text-sm'>SERIES 9</p>
        <p className='text-white text-lg'>Smarter. Brighter. Mightier.</p>
        <div id="link" className="flex-row text-blue-500 p-3 ">
          <Link href="" className="p-2 mr-2 hover:underline">Learn More &gt;</Link>
          <Link href="" className="p-2 ml-2 hover:underline">Buy &gt;</Link>
        </div>
        </div>
      </div>
      <div id='ultraWatch' >
      <div id="text" className='flex flex-col justify-center items-center mt-16'>
        <p className='text-3xl font-semibold'> WATCH</p>
        <p className='text-orange-500 text-sm font-medium'>ULTRA 2</p>
        <p className='text-lg'>Next level adventure.</p>
        <div id="link" className="flex-row text-blue-400 p-3 ">
          <Link href="" className="p-2 mr-2 hover:underline">Learn More &gt;</Link>
          <Link href="" className="p-2 ml-2 hover:underline">Buy &gt;</Link>
        </div>
        </div>
      </div>
      <div id='Mac' >
      <div id="text" className='flex flex-col justify-center items-center mt-16'>
        <p className='text-4xl font-semibold'>MacBook Pro</p>
        <p className='text-xl mt-2'>Mind-blowing. Head-turning.</p>
        <div id="link" className="flex-row text-blue-500 p-3 ">
          <Link href="" className="p-2 mr-2 hover:underline">Learn More &gt;</Link>
          <Link href="" className="p-2 ml-2 hover:underline">Buy &gt;</Link>
        </div>
        </div>
      </div>
      <div id='fitness' >
      <div id="text" className='flex flex-col justify-center items-center mt-16'>
        <p className='text-white text-4xl font-medium'> Fitness+</p>
        <p className='text-white text-xl font-light w-80 text-center'>Work out to an entire playlist of music by your favourite artists.</p>
        <div id="link" className="flex-row text-white p-3 ">
          <Link href="" className="p-2 mr-2 hover:underline">Learn More &gt;</Link>
          <Link href="" className="p-2 ml-2 hover:underline">Try it free &gt;</Link>
        </div>
        </div>
      </div>
      <div id="card">
      <div id="text" className='flex flex-col justify-center items-center mt-16'>
        <p className=' text-4xl font-medium'> Card</p>
        <p className=' text-xl font-light w-80 text-center'>Get up to 3% daily Cash back with every purchase.</p>
        <div id="link" className="flex-row text-blue-500 p-3 ">
          <Link href="" className="p-2 mr-2 hover:underline">Learn More &gt;</Link>
          <Link href="" className="p-2 ml-2 hover:underline">Apply Now &gt;</Link>
        </div>
        </div>
      </div>
      <div id="trade">
      <div id="text" className='flex flex-col justify-center items-center mt-16'>
        <p className=' text-4xl font-medium'> Trade In</p>
        <p className=' text-xl font-light w-80 text-center'>Get $200-$650 in credit when you trade in iPhoe 11 or higher.</p>
        <div id="link" className="flex-row text-blue-500 p-3 ">
          <Link href="" className="p-2 mr-2 hover:underline">See what your device is worth &gt;</Link>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default List