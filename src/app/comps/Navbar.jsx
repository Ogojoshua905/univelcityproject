import Image from 'next/image'
import Link from 'next/link'
import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, } from 'react-icons/fa'
import { GiQueenCrown } from 'react-icons/gi'
import SocialIcons from './SocialIcons'
export default function Navbar() {
  return (
    <nav className='bg-slate-200 text-slate-900  h-[20vh] flex justify-between text-3xl capitalize'>

    <div className='flex item-center gap-x-5'>
      <Image src="/LOGO.png" alt="Gn" width="100" height="30" className='rounded-md shadow-2xl transform hover:scale-100 duration-300'/>
      <p>GamingNow</p>
    </div>


    <ul className='flex items-center gap-x-5'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Pages</Link></li>
        <li><Link href="/about">About</Link></li>
    </ul>
    
    <SocialIcons/>
    <li><Link href="/">
        <span>Subscribe</span>
        <GiQueenCrown/>
        </Link></li>
    </nav>
  )
}
