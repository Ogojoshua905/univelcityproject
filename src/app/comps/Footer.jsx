import Image from 'next/image'
import SocialIcons  from './SocialIcons'
import PageLinks from './PageLinks'
import Link from 'next/link'
import { BiSolidJoystick } from 'react-icons/bi'

export default function Footer() {
  return (
   <footer className='h-[100vh] bg-gradient-to-tr from-red-500 via-indigo-500 to-blue-500 text-white sm:mx-10 mt-14 leading-6 gap-8'>
    <div className=' lg:flex sm:block gap-x-16 px-8'>

    
    <div className=" flex-col md:gap-y-6">
    
    <Link href="/" className='text-3xl hover:cursor-pointer mt-5 md:flex gap-x-3'><BiSolidJoystick className=' mb-5 items-center ml-2 leading-6' />TechGamer Nexus</Link>
        <p className='font-bold mb-5'>Where Tech Meets Play</p>
        <SocialIcons />
    </div>
    
    
    <div className=' items-center object-center'>
        <div className='md:flex mt-5  justify-start items-start gap-48 text-2xl'>

  <div className='capitalize sm:block md:block items-center object-center leading-loose mb-5'>
    <h2 className=' text-4xl'>Pages</h2>
    
      <div className='block'>
        <PageLinks href="" title="Home" link='/'/>
        <PageLinks title="Author" link='/contact'/>
        <PageLinks title="Blog" link='/category'/>
        <PageLinks title="About Us" link='/about'/>
        {/* <PageLinks title="Subscribe" link='/contact'/>
        <PageLinks title="Privacy Policy" link='/'/> */}
      </div>
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

<div className='capitalize block pb-2 leading-loose'>
  <h2 className='text-4xl'>Follow</h2>
      <div className=' md:block'>
        <PageLinks title="Twitter" link='https://twitter.com/Algebra905'/>
        <PageLinks title="GitHub" link='https://github.com/Ogojoshua905'/>
        <PageLinks title="LinkedIn" link='https://www.linkedin.com/in/ogo-joshua-9572832a4/'/>
        <PageLinks title="Instagram" link='https://www.instagram.com/officialalgebra905/'/>
        {/* <PageLinks title="Facebook" link='/'/>
        <PageLinks link='/'/> */}
      </div>
    
  </div>      
        </div>

    </div>

      </div>
        <div className='w-full pt-96 p-4 text-center'>
        <h2 className='object-center p-4 border-2 bottom-96 border-gray-400'>Copyright &copy; 2024 TGN | Designed by ByteProwler - Powered by Alcatraz</h2>
        </div>
   </footer>
  )
}
