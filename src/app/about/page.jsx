import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <h1 className=' text-6xl justify-center text-center mt-10'>Focus on the Quest Objective!</h1>
      <div className='grid grid-cols-3 mt-7 border '>
        <div className=' col-span-1 row-span-1 '>
      <p className=' text-4xl'>
      Gather the squad <br />
      and press on with <br /> 
      report analysis!</p>
        </div>
        <div className=' row-span-2 justify-end py-8'>
        <Image src="/BR.jpg" width="800" height="200" />

        </div>
      </div>
    </div>
  )
}
