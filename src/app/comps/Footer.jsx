import Image from 'next/image'
import SocialIcons  from './SocialIcons'
import PageLinks from './PageLinks'
import Link from 'next/link'
import { BiSolidJoystick } from 'react-icons/bi'

export default function Footer() {
  return (
   <footer className='h-[100vh] bg-[#111812] text-white flex gap-9'>
    
    <div className="flex flex-col gap-y-6">
    
    <p className='text-3xl flex gap-x-3'><BiSolidJoystick className=' justify-center items-center ml-2' />GamingNow</p>
        <p>Thank you for choosing GamingNow as your go-to <br /> platform for all things gaming</p>
        <SocialIcons />
    </div>
    
    

    <div className='flex justify-start items-start gap-5 text-2xl'>
  <div className='capitalize'>
    <h2>Pages</h2>
    
      <ol>
        <PageLinks href="" title="Home" link='/'/>
        <PageLinks title="Author" link='/author'/>
        <PageLinks title="Blog" link='/'/>
        <PageLinks title="About Us" link='/'/>
        <PageLinks title="Subscribe" link='/'/>
        <PageLinks title="Privacy Policy" link='/'/>
      </ol>
    </div>

<div className='capitalize'>
  <h2>Trending</h2>
      <ol>
        <PageLinks title="Esport" link='/'/>
        <PageLinks  title="Upcoming Games" link='/'/>
        <PageLinks  link='/'/>
        <PageLinks  link='/'/>
        <PageLinks  link='/'/>
        <PageLinks link='/'/>
      </ol>
    
  </div> 

<div className='capitalize'>
  <h2>Follow</h2>
      <ol>
        <PageLinks title="Twitter" link='/'/>
        <PageLinks title="GitHub" link='/'/>
        <PageLinks title="LinkedIn" link='/'/>
        <PageLinks title="Instagram" link='/'/>
        <PageLinks title="Facebook" link='/'/>
        <PageLinks link='/'/>
      </ol>
    
  </div>      

    </div>
    <div className='inline-block'>
      <p>{`We're On Instagram`}</p>
      
    </div>

   </footer>
  )
}
