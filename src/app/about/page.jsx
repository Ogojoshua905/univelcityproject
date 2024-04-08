import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      
      <h1 className=' justify-center text-center mt-7 text-7xl'>Focus on the Quest Objective!</h1>

      <div className=' justify-center object-center items-center mt-6'>
        <Image className='w-[95%] h-[300px]' src="/media/BR.jpg" width="400" height="200"/>
      </div>

      <div className='grid grid-cols-3 grid-rows-1 ml-12 gap-5 mr-12 mt-6 border-t-2 border-b-2 border-black mb-14'>
        <div className='cols-span-1 mt-6'>
            <p className=' text-6xl justify-between font-medium'>Gather the squad <br /> and press <br /> on with <br /> report analysis!</p>
        </div>

        <div className=' col-span-2 ml-12 border-l-2 border-black '>
            <Image className=' ml-12 w-[85%] h-[300px] pb-4 mt-4' src="/media/E-sport.jpg" width="400" height="100" />
            <p className=' ml-12 text-justify justify-between'>
              "Guild—a collaboration of enthusiastic minds united by a mutual dedication to greatness. Every member possesses a distinct array of talents and backgrounds, enriching the diverse range of viewpoints that influence our endeavors in the realm of tech and mobile gaming."
            </p>
        </div>
      </div>

      <div>
        <p className='text-8xl items-center text-center justify-between'>Cutting-edge Gaming News & <br /> Feature Nexus</p>
        <div className=' grid grid-cols-3 gap-5 border-t-2 border-b-2 border-black mb-10 mr-12 ml-12 mt-9'>
          <div className=' col-span-1 pl-10'>
            <p className='text-3xl font-medium text-center mt-7'>Our Saga</p>
              <p className=' pb-5'>
              The Legendary Chronicles: From Victories to Boss Battles, Jokes to Heartbreaks, this saga intertwines our past, present, and dreams of tomorrow. Join the adventure as we unravel the epic tale of our gaming journey!
              </p>
              <Image src="https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400" width="200" height="100"/>
              <p className=' pt-5'>
              Storylines Beyond Boundaries: Crossing epochs, merging our gaming past, present, and the shimmering dreams of our digital future. Every questline spins a yarn of resilience, evolution, and the unwavering chase for our gaming ambitions.
              </p>
          </div>
          <div className=' col-start-2 pt-5 pl-5 border-l-2 border-black border-r-2'>
            <Image className=' pl-5' src="https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400" width="200" height="100"/>
            <p className='text-3xl font-medium pt-8'>
            Various Gaming Zones: Explore diverse categories or sections. A search bar, essential for gamers, swiftly locates specific content.
            </p>
          </div>
          <div>
            <p className=' text-3xl font-medium text-center mt-7'>Our Saga</p>   

            <p>Blends enduring mechanics, innovative tech, and sleek designs for an ultra-modern gaming experience.</p>

            <div>
                
            </div>
          </div>
        </div>
      </div>

        <div className=''>
        <h2>Our Author</h2>

        </div>
    </div>
  )
}
