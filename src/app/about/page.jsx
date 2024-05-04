"use client"

import React from 'react'
import Image from 'next/image'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { MdAddLocationAlt } from "react-icons/md";
import ContactForm from '../comps/ContactForm';
import { motion, AnimatePresence } from "framer-motion"
import ProfIcons from '../comps/ProfIcons'
import Button from '../comps/Button'
import Link from 'next/link'


export default function page() {
  return (
<AnimatePresence>

    <motion.div
      // initial={{ opacity:0 }}
      // whileInView={{opacity: 1}}
      // transition={{duration: 0.8 }}
  
      initial={{ opacity: 0, y: -50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation on load
      transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration and easing
      // initial={{ opacity:0,

      //   show:{opacity:1,
      //     transition:{
      //       duration: 0.75,
            
      //     }
      //   }
      // }}
      // whileInView={{
      //   opacity:1
      // }}
      // viewport={{
      //   amount:"all"
      // }}
    >
      <motion.h1
        
        
       className='justify-center text-center mt-7 text-7xl'>Focus on the Quest Objective!</motion.h1>

      <div className=' justify-center object-center items-center mt-6'>
        <Image className='w-[95%] ml-9 md:h-[300px] bg-cover' src="/media/BR.jpg" alt='dont know' width="400" height="200"/>
      </div>

      <div className='md:grid md:grid-cols-3 grid-rows-1 ml-12 gap-5 mr-12 mt-6 border-t-2 border-b-2 dark:border-white border-black mb-14'>
        <div className='cols-span-1 mt-6'>
            <p className=' text-6xl justify-between sm:-scroll-mb-12 md:mr-12 font-medium'>Gather the squad <br /> and press <br /> on with <br /> report analysis!</p>
        </div>

        <div className=' col-span-2 border-l-2 border-black dark:border-white '>
            <Image className=' ml-12 w-[85%] h-[300px] pb-4 mt-4' src="/media/eSports.jpg"  alt='A Gaming Setup' width="400" height="100" />
            <p className=' ml-12 text-justify justify-between'>
              <q>
                Guild—a collaboration of enthusiastic minds united by a mutual dedication to greatness. Every member possesses a distinct array of talents and backgrounds, enriching the diverse range of viewpoints that influence our endeavors in the realm of tech and mobile gaming.
                </q>
            </p>
        </div>
      </div>

      <div>
        <p className='text-8xl items-center text-center justify-between'>Cutting-edge Gaming News & <br /> Feature Nexus</p>
        <div className=' md:grid md:grid-cols-3 gap-5 border-t-2 border-b-2 dark:border-white border-black mb-10 mr-12 ml-12 mt-9'>
          <div className=' col-span-1 pl-10'>
            <p className='text-3xl font-medium text-center mt-7'>Our Saga</p>
              <p className=' pb-5'>
              The Legendary Chronicles: From Victories to Boss Battles, Jokes to Heartbreaks, this saga intertwines our past, present, and dreams of tomorrow. Join the adventure as we unravel the epic tale of our gaming journey!
              </p>
              <Image src="https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400" alt='wtf' width="200" height="100"/>
              <p className=' pt-5'>
              Storylines Beyond Boundaries: Crossing epochs, merging our gaming past, present, and the shimmering dreams of our digital future. Every questline spins a yarn of resilience, evolution, and the unwavering chase for our gaming ambitions.
              </p>
          </div>
          <div className=' col-start-2 pt-5 pl-5 border-l-2 dark:border-white border-black border-r-2'>
            <Image className=' pl-5' src="https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400" alt='whatever' width="200" height="100"/>
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

        <div className='md:grid md:grid-cols-3 md:grid-row-6 gap-10 p-10 ml-11'>
          <div className='flex col-span-3 justify-between'>
            <h2>Our Author</h2>  
            <Button status="View Post" />
          </div>

          <div className=' border-black dark:border-white border-4 leading-relaxed hover:duration-700 hover:ease-out hover:bg-pink-400 border-opacity-95 rounded-lg aspect-auto'>
              <Image className='pl-24 pt-4 h-[204px] w-[324px]' src="/media/Johnsmith.jpg" width="300" height="800" alt='John Smith'/>
              <h2 className=' font-bold text-center text-2xl mt-4'>John Smith</h2>
              <h2 className='text-center italic'>Technology Enthusiast</h2>
              <p className=' ml-5 mr-5 mb-5 text-center'>"Embark on a journey through the ever-evolving world of technology with me, John Smith. As a tech enthusiast and avid explorer of innovation, I'm here to unravel the latest advancements in mobile technology and share insights that shape our digital landscape."</p>
          </div>

          <div className=' border-black dark:border-white border-4 leading-relaxed hover:duration-700 hover:ease-out hover:bg-pink-400 border-opacity-95 rounded-lg aspect-auto'>
            <Image className=' pl-24 pt-4 h-[204px] w-[324px] items-center' src="/media/Emily.jpg" width="300" height="1000" alt='Emily Johnson' />
            <h2 className=' font-bold text-center text-2xl mt-4'>Emily Johnson</h2>
            <h2 className=' text-center italic'>Tech Writer</h2>
            <p className=' ml-5 mr-5 mb-5 text-center'>"Join me, Emily Johnson, on an adventure into the vibrant realm of mobile gaming. With a passion for immersive experiences and a keen eye for standout titles, I'm here to guide you through the thrilling world of mobile games and uncover hidden gems that captivate gamers of all kinds."</p>

          </div>

          <div className=' border-black dark:border-white border-4 leading-relaxed hover:duration-700 hover:ease-out hover:bg-pink-400 border-opacity-95 rounded-lg aspect-auto'>
          <Image className=' pl-24 pt-4 pr-9 h-[204px] w-[324px] items-center' src="/media/Michael.jpg" width="300" height="1000" alt='Emily Johnson' />
            <h2 className=' font-bold text-center text-2xl mt-4'>Michael Brown</h2>
            <h2 className=' text-center italic'>Gaming Expert</h2>
            <p className=' ml-5 mr-5 mb-5 text-center'>"Welcome, fellow gamers, to the battlegrounds of the digital arena! I'm Michael Brown, your guide to the heart-pounding world of battle royale games. Join me as we dive deep into strategies, analyze updates, and dominate the battlefield in games like Fortnite and PUBG."</p>
            <ProfIcons />
          </div>

          <div className=' border-black dark:border-white border-4 leading-relaxed hover:duration-700 hover:ease-out hover:bg-pink-400 border-opacity-95 rounded-lg aspect-auto'>
          <Image className=' pl-24 pt-4 h-[204px] w-[324px]' src="/media/Jessica.jpg" width="300" height="1000" alt='Jessica Martinez' />
            <h2 className=' font-bold text-center text-2xl mt-4'>Jessica Martinez</h2>
            <h2 className=' text-center italic'>Tech Journalist</h2>
            <p className=' ml-5 mr-5 mb-5 text-center'>"Hola! I'm Jessica Martinez, your tech companion on a journey through the innovative universe of Samsung devices. From smartphones to smartwatches, join me as we explore the latest features, delve into in-depth reviews, and navigate the exciting world of Samsung technology."</p>
          </div>

          <div className=' border-black dark:border-white border-4 leading-relaxed hover:duration-700 hover:ease-out hover:bg-pink-400 border-opacity-95 rounded-lg aspect-auto'>
          <Image className=' pl-24 pt-4 h-[204px] w-[324px]' src="/media/David.jpg" width="300" height="1000" alt='Sophia Clark' />
            <h2 className=' font-bold text-center text-2xl mt-4'>David Anderson</h2>
            <h2 className=' text-center italic'>Apple Afficionado</h2>
            <p className=' ml-5 mr-5 text-center'>"Greetings, Apple aficionados! I'm David Anderson, your go-to guide for all things iPhone. Join me as we uncover the newest features, unravel software updates, and delve into the unparalleled world of Apple innovation, one iPhone at a time."</p>
          </div>

          <div className=' border-black dark:border-white border-4 leading-relaxed hover:duration-700 hover:ease-out hover:bg-pink-400 border-opacity-95 rounded-lg aspect-auto'>
          <Image className=' pl-24 pt-4 h-[204px] w-[324px]' src="/media/Sophia.jpg" width="300" height="1000" alt='Sophia Clark' />
            <h2 className=' font-bold text-center text-2xl mt-4'>Sophia Clark</h2>
            <h2 className=' text-center italic'>e-Sports Journalist</h2>
            <p className=' ml-5 mr-5 text-center'>"Greetings, esports enthusiasts! I'm Sophia Clark, your trusted source for all things competitive gaming. Join me as we journey through the electrifying world of esports, covering major tournaments, emerging stars, and the pulse-pounding excitement of competitive gaming."</p>

          </div>
        </div>
      
        <section className=" md:grid md:grid-cols-2 mt-28 pl-28 pr-28 mb-32">
            <div>
                <h2 className=" text-8xl pb-12">Feel Free to Reach Out!</h2>
                <p className=" text-[20px] mb-14 leading-loose">Don't hesitate to get in touch with us. We're here to help and eager to hear from you</p>

                <div className="mb-4 text-4xlm  ">

                  <Link className="flex mb-10 text-xl" href="mailto:joshuaexcellency@gmail.com.com">
                    <FaEnvelope className="hover:text-white p-2 rounded-full border"/><span className="hover:text-pink-500">Email</span>
                    </Link>
                  

                
                <Link className="flex mb-10 text-xl" href="tel:(+234) 9160310791"><FaPhoneAlt className="hover:text-white p-2 rounded-full border" /><span className="hover:text-pink-500">Phone</span></Link>
                

                
                 <Link className="flex text-xl" href="https://maps.app.goo.gl/eEt7CQvc5nUmHULo7">
                  <MdAddLocationAlt /><span className="hover:text-pink-500">Map</span>
                 </Link>
                

              </div>
                </div>

            <div className=" border-4 pl-12 border-black dark:border-white leading-[100px]">
               <ContactForm />
            </div>
        </section>
        
       
    </motion.div>
</AnimatePresence>
  )
}
