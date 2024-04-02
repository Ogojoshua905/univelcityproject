import Image from 'next/image'
import Input from './Input'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import Button from './Button'

export default function Navbar({children}) {

  return (
    <nav className='border-gray-950 border-y-2 flex justify-between items-center text-2xl capitalize font-bold mt-14'>

    {children}
    <div className='flex justify-between item-center gap-x-5'>
      <Image src="/LOGO.png" alt="Gn" width="50" height="30" className='rounded-md shadow-lg ml-5'/>
      <h1 className='m-2 text-4xl'>GamingNow</h1>
    </div>

    <div className='flex space-x-3  justify-center p-1 text-2xl border-r-2 border-black'>
        <div className='rounded-full py-2 px-3 cursor-pointer transform hover:scale-90 transition ease-in-out duration-300 border-b-2 hover:border-red-300'><Link href="/">Home</Link></div>
        <div className='py-2 px-3 rounded-full'><Link href="/about">About</Link></div>
        <div className='py-2 px-3'><Link href="/blog">Blog</Link></div>
        <div className='py-2 px-3'><Link href="/category">Category</Link></div>
        <div className='py-2 px-3'><Link href="/contact">Contact</Link></div>
    </div>
    
    {/* <SocialIcons/> */}
    <div className=' border-none '>
        <Input type="email" userid="email" place="Enter Email" />
        <Button status="subscribe" />
        </div>
    </nav>
  )
}
