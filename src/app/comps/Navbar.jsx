import Image from 'next/image'
import Input from './Input'
import Link from 'next/link'
import { BiSolidJoystick } from "react-icons/bi"
import { FaAngleDown } from 'react-icons/fa'
import Button from './Button'
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeSwitch from './ThemeSwitch'

// const burger = document.querySelector("#burger")
// const menu = document.querySelector("#menu")

// burger.addEventListener("click", () => {

// })

export default function Navbar( ) {

  return (
    <nav className='border-gray-950 dark:border-white border-y-2 flex justify-between items-center text-2xl capitalize font-bold mt-20'>

    
    <div className='flex justify-between items-center gap-x-3'>
    <BiSolidJoystick className=' justify-center items-center ml-2' />
      {/* <Image src="/LOGO.png" alt="Gn" width="50" height="30" className='rounded-md shadow-lg ml-5'/> */}
      <h1 className='m-2 text-4xl'>GamingNow</h1>
    </div>

    <div className='md:flex hidden dark:border-white space-x-3  justify-between p-1 text-2xl border-r-2 border-black' id='menu'>
        <div className='rounded-full py-2 px-3 cursor-pointer transform hover:scale-90 transition ease-in-out duration-300 border-b-2 hover:border-red-300'><Link href="/">Home</Link></div>
        <div className='py-2 px-3 rounded-full'><Link href="/about">About</Link></div>
        <div className='py-2 px-3'><Link href="/category">Blog</Link></div>
        <div className='py-2 px-3'><Link href="/blog">Category</Link></div>
        <div className='py-2 px-3'><Link href="/contact">Contact</Link></div>

        <div className=' align-middle items-center'>
        <ThemeSwitch />
        </div>
    </div>
    
    {/* <SocialIcons/> */}
    <div className=' border-none md:flex hidden'>
        <Input type="email" userid="email" place="Enter Email" />
        <Button className="p-3" status="subscribe" />
        </div>

        <div className='px-4 md:hidden text-white bg-black cursor-pointer' id='burger'>
        <RxHamburgerMenu className='w-6' />
        </div>
    </nav>
  )
}
