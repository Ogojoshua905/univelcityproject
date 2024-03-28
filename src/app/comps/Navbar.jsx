import Image from 'next/image'
import Input from './Input'
import Link from 'next/link'
import Button from './Button'
export default function Navbar() {

  return (
    <nav className='border-gray-950 border-y-2 flex justify-between items-center text-2xl capitalize font-bold mt-10'>

    <div className='flex justify-between item-center gap-x-5'>
      <Image src="/LOGO.png" alt="Gn" width="50" height="30" className='rounded-md shadow-lg ml-5'/>
      <h1 className='m-2 text-4xl'>GamingNow</h1>
    </div>

    <div className='flex space-x-3  justify-center p-8 text-3xl border-r-2 border-black'>
        <div className='hover:bg-fuchsia-300 hover:rounded-full hover:border-8'><Link href="/">Home</Link></div>
        <div><Link href="/">Pages</Link></div>
        <div><Link href="/about">About</Link></div>
    </div>
    
    {/* <SocialIcons/> */}
    <div className='border-l-3 space-x-2 border-black'>
        <Input type="email" userid="email" place="Enter Email" />
        <Button status="subscribe" />
        </div>
    </nav>
  )
}
