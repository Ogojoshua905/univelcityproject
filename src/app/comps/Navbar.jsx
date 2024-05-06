"use client"
import Image from 'next/image'
import Input from './Input'
import Link from 'next/link'
import { BiSolidJoystick } from "react-icons/bi"
import { FaAngleDown } from 'react-icons/fa'
import Button from './Button'
import { motion } from 'framer-motion'
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeSwitch from './ThemeSwitch'
import { useState } from 'react'



export default function Navbar( ) {

  const [isClick, setisClick] = useState(false)

  const toggleNavBar = () => {
    setisClick(!isClick)
  }

  return (
    <nav className='border-gray-950 dark:border-red-500 border-y-4 sm:block md:flex justify-between items-center text-2xl capitalize font-bold mt-20'>

    
    
    <div className='justify-between items-center gap-x-3 flex'>
      {/* <Image src="/LOGO.png" alt="Gn" width="50" height="30" className='rounded-md shadow-lg ml-5'/> */}
 
      <Link className="" href="/">
      <div className='flex'>
    <BiSolidJoystick className='text-4xl' />
      <span>GamingNow</span>
      </div>
      </Link>


        <div className='items-center md:hidden flex cursor-pointer' onClick={toggleNavBar} >
        {/* <RxHamburgerMenu className='w-6' /> */}
    
        <button className=' items-center justify-center p-2 '>

        {isClick ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>

        )
      }
        </button>
        </div>
    </div>

    <div className='md:block hidden'>
      
    <div className='dark:border-white flex items-center space-x-4'>

        
          <Link className='p-2  hover:border-b-red-500 border-b-4' href="/">
            Home
            </Link>
            

       
            
          <Link className='p-2 hover:border-b-yellow-400 border-b-4' href="/about">
            About
            </Link>
            
            
        
          <Link className='p-2 hover:border-b-blue-700 border-b-4' href="/category">
            Blog
            </Link>
            
            
        
          <Link className='p-2' href="/description">
            Category
            </Link>
            
        
          <Link className='p-2' href="/contact">
            Contact
            </Link>
            

        <div className=' hidden md:flex py-2 px-3 align-middle border-r-2 items-center'>
        <ThemeSwitch />
        </div>

    
        <Input type="email" userid="email" place="Enter Email" />
        <Button className="p-3" status="subscribe" />
        
            </div>
    </div>
    
    

    {isClick && (
      <motion.div
        
      className='md:hidden block px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            
            <Link className='p-2' href="/">
            Home
            </Link>
            

       
            
          <Link className='p-2 block' href="/about">
            About
            </Link>
            
            
        
          <Link className='p-2 block' href="/category">
            Blog
            </Link>
            
            
        
          <Link className='p-2 block' href="/description">
            Category
            </Link>
            
        
          <Link className='p-2 block' href="/contact">
            Contact
            </Link>
            

        <div className=' block p-2 items-center'>
        <ThemeSwitch />
        </div>

    <div className=' flex'>

        <Input type="email" userid="email" place="Enter Email" /><Button className="p-3" status="subscribe" />
    </div>
            
      </motion.div>
          
    )}
    </nav>
  )
}
