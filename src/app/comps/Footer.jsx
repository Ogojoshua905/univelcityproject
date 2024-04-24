import Image from 'next/image'
import SocialIcons  from './SocialIcons'
import PageLinks from './PageLinks'
import Link from 'next/link'

export default function Footer() {
  return (
   <footer className='h-[100vh] bg-[#111812] text-white flex gap-9'>
    <div className="flex flex-col gap-y-6">

    {/* <p className="animate-left">We are dedicated to providing the best gaming experience for our users.</p> */}


    {/* <div className='flex gap-x-2 items-center capitalize'>
    <Image src="/LOGO2.png" alt='logo' width="100" height='100'/>
    </div> */}
    <p className='text-3xl'>GamingNow</p>
        <p>Thank you for choosing GamingNow as your go-to <br /> platform for all things gaming</p>
        <SocialIcons />
    </div>
    
    {/* <div className='capitalize'>
      <h2>Category</h2>
    <div>
      <CatLinks title="Call Of Duty: Mobile" bg="bg-red-600"/>
      <CatLinks title="Bloodstrike" bg="bg-red-700"/><br/>
      <CatLinks title="eFootball" bg="bg-green-700"/>
      <CatLinks title="react" bg="bg-orange-500"/><br/>
      <CatLinks  title="tailwindcss" bg="bg-fuchsia-700"/>
    </div>
  </div> */}

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
      <p>We're On Instagram</p>
      
    </div>

   </footer>
  )
}
