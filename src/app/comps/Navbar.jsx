"use client"
import Image from 'next/image'
import Input from './Input'
import Link from 'next/link'
import { BiSolidJoystick } from "react-icons/bi"
import { FaAngleDown } from 'react-icons/fa'
import Button from './Button'
import { AnimatePresence, motion } from 'framer-motion'
import { MdOutlineClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeSwitch from './ThemeSwitch'
import { useState } from 'react'
import { articles } from '../page'

const dropCat = articles.map(drop => (
  <h2 className='relative dark:text-white w-64 shadow-lg dark:bg-gray-950 hover:text-[#9147FF] bg-white p-6' key={drop.id}><Link href={`/blog/${drop.title.split(' ').join('-')}`} title={drop.title}>{drop.category}</Link>
  </h2>
)).slice(2,8)

export default function Navbar() {

  const [isClick, setisClick] = useState(false)

  const [open, setOpen] = useState(false);

  const showFlyout = dropCat && open;

  const toggleNavBar = () => {
    setisClick(!isClick)
  };

  const closeNavBar = () => {
    setisClick(false);
  };

  const toggleCatDropdown = () => {
    setOpen(true);
  };

  const toggleCatDropdownUp = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>

    <nav className='border-gray-950 dark:border-red-500 border-y-4 sm:block md:flex justify-between items-center text-2xl capitalize font-bold mt-20'>

    
    
    <div className='justify-between items-center gap-x-3 flex'>
 
      <Link href="/">
      <div className='flex'>
    <BiSolidJoystick className='text-4xl' />
      <span className='md:flex hidden'>TechGamer Nexus</span>
      <motion.span
       initial={{opacity: 0, x:10 }}
       animate={{ opacity: 1, x:0 }}
       exit={{ opacity: 0, x:10 }}
       transition={{ duration: 0.3 }}
       className=' md:hidden flex cursor-pointer'>TGN</motion.span>
      </div>
      </Link>


        <div className='items-center md:hidden flex cursor-pointer' onClick={toggleNavBar} >
        
    
        <button className=' items-center bg-[#9050ed] justify-center p-2 '>

        {isClick ? ( <MdOutlineClose /> ) : ( <RxHamburgerMenu/>)
      }
        </button>
        </div>
    </div>

    <div className='md:block hidden'>
      
    <div className='dark:border-white flex items-center space-x-9'>

            <Link className='p-2' href="/">
              Home
            </Link>
           
          
            

       
            
          <Link className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:border-yellow-500' href="/about">
            About
            </Link>
            
            
        
          <Link className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:border-blue-500' href="/category">
            Blog
            </Link>
            
            
        
            <div className="relative w-fit h-fit" onMouseEnter={toggleCatDropdown} onMouseLeave={toggleCatDropdownUp}>

            <span className='p-2 flex hover:cursor-pointer'>
              Category <RiArrowDropDownLine className=' hover:animate-bounce' />
            </span>
            {showFlyout && (
              <motion.div
              initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
              className=" absolute left-1/2 top-12 bg-white text-black">

              <div className=' absolute -top-6 left-0 right-0 h-6 '>
                  
                  <span style={{
                    transform: showFlyout ? "scaleX(1)" : "scale(0)",
                  }} className='absolute -bottom-2 -left-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out'>

                  <span >{dropCat}
                  </span>
                  </span>
                

                  </div>
              </motion.div>
            )}
          </div>
            
        
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
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='md:hidden block px-2 pt-2 pb-3 bg-[#caacf7] space-y-1 sm:px-3'>
            
            <Link href="/" className='p-2 hover:text-[#9147FF]' onClick={closeNavBar}>
              Home 
            </Link>
          
            

       
            
          <Link className=' block' href="/about" onClick={closeNavBar}>
           <span className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:text-[#9147FF]'>About</span>
            </Link>
            
            
        
          <Link className='block' href="/category" onClick={closeNavBar}>
            <span className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:text-[#9147FF]'>Blog</span>
            </Link>
            
            <div className="relative w-fit h-fit" onMouseEnter={toggleCatDropdown} onMouseLeave={toggleCatDropdownUp}>

        <span className='p-2 flex hover:text-[#9147FF]'>
          Category <RiArrowDropDownLine className=' hover:animate-bounce' />
        </span>
      {showFlyout && (
       <motion.div
       initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        style={{ translateX: "-50%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className=" relative left-1/2 top-12 bg-white text-black">

  <div className=' relative -top-6 left-0 right-0 h-6 '>
      
      <span style={{
        transform: showFlyout ? "scaleX(1)" : "scale(0)",
      }} className='relative block -bottom-2 -left-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out'>

      <span className='block'>{dropCat}
      </span>
      </span>
    

      </div>
  </motion.div>
)}
</div>
        
            {/* <div className='relative h-fit' onMouseEnter={toggleCatDropdown} onMouseLeave={toggleCatDropdownUp}>
            <span className='p-2 flex'>
              Category <RiArrowDropDownLine />
            </span>
            {showFlyout && (
              <motion.div
              initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative dark:bg-black bg-white text-black dark:text-white p-5 rounded-md ">

                <div className=' block'>
                  <span className=' block'>{dropCat}</span>
                </div>

              </motion.div>
            )}
          </div> */}
            
        
          <Link className='block' href="/contact" onClick={closeNavBar}>
            <span className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:text-[#9147FF]'>Contact</span>
            </Link>
            

        <div className=' block p-2 items-center'>
        <ThemeSwitch />
        </div>

    <div className='md:flex sm:block'>

        <input className='w-full focus:outline-none py-2 border-black border-2 block sm:w-auto lg:w-full bg-inherit' type="email" userid="email" placeholder="Enter Email" />
        <button className=" my-4 sm:mx-auto w-full sm:items-center py-2 mx-auto border border-transparent shadow-sm text-white bg-[#9147FF] hover:bg-[#af7aff] focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2">
          Subscribe
        </button>
    </div>
            
      </motion.div>
          
    )}
    </nav>
    </AnimatePresence>
  )
}
