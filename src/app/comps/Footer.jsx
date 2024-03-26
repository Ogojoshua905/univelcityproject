import CatLinks from './Catlinks'
import Image from 'next/image'
import SocialIcons  from './SocialIcons'

export default function Footer() {
  return (
   <footer className='h-[60vh] bg-slate-900 text-white'>
    <div className="flex flex-col gap-y-6">


    <div className='flex gap-x-2 items-center capitalize'>
    <Image src="/LOGO2.png" alt='logo' width="100" height='100'/>
    <p>GamingNow</p>
    </div>
        <p>Resources On Web Development And Programming</p>
        <SocialIcons />
    </div>
    
    <div className='capitalize'>
      <h2>Category</h2>
    <div>
      <CatLinks title="html" bg="bg-red-600"/>
      <CatLinks title="javascript" bg="bg-red-700"/><br/>
      <CatLinks title="css" bg="bg-green-700"/>
      <CatLinks title="react" bg="bg-orange-500"/><br/>
      <CatLinks  title="tailwindcss" bg="bg-fuschia-100"/>
    </div>
  </div>
    


   </footer>
  )
}
