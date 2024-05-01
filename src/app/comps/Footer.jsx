import Image from 'next/image'
import SocialIcons  from './SocialIcons'
import PageLinks from './PageLinks'
import Link from 'next/link'
import { BiSolidJoystick } from 'react-icons/bi'

export default function Footer() {
  return (
   <footer className='h-[100vh] bg-[#111812] text-white flex gap-9'>
    
    <div className=" flex-col md:gap-y-6">
    
    <p className='text-3xl md:block gap-x-3'><BiSolidJoystick className=' justify-center items-center ml-2' />GamingNow</p>
        <p>Thank you for choosing GamingNow as your go-to <br /> platform for all things gaming</p>
        <SocialIcons />
    </div>
    
    

    <div className='md:flex  justify-start items-start gap-5 text-2xl'>
  <div className='capitalize block'>
    <h2>Pages</h2>
    
      <ol>
        <PageLinks href="" title="Home" link='/'/>
        <PageLinks title="Author" link='/author'/>
        <PageLinks title="Blog" link='/category'/>
        <PageLinks title="About Us" link='/about'/>
        {/* <PageLinks title="Subscribe" link='/contact'/>
        <PageLinks title="Privacy Policy" link='/'/> */}
      </ol>
    </div>

{/* <div className='capitalize block'>
  <h2>Trending</h2>
      <ol>
        <PageLinks title="Esport" link='/'/>
        <PageLinks  title="Upcoming Games" link='/'/>
        <PageLinks  link='/'/>
        <PageLinks  link='/'/>
        <PageLinks  link='/'/>
        <PageLinks link='/'/>
      </ol>
    
  </div>  */}

<div className='capitalize block pb-2'>
  <h2>Follow</h2>
      <ol>
        <PageLinks title="Twitter" link='https://twitter.com/Algebra905'/>
        <PageLinks title="GitHub" link='https://github.com/Ogojoshua905'/>
        <PageLinks title="LinkedIn" link='https://www.linkedin.com/in/ogo-joshua-9572832a4/'/>
        <PageLinks title="Instagram" link='https://www.instagram.com/officialalgebra905/'/>
        {/* <PageLinks title="Facebook" link='/'/>
        <PageLinks link='/'/> */}
      </ol>
    
  </div>      

    </div>

   </footer>
  )
}
