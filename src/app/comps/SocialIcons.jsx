import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, } from 'react-icons/fa'
import { GiQueenCrown } from 'react-icons/gi'
import Link from 'next/link'

export default function SocialIcons() {
  return (
   
    <ul className='flex items-center gap-x-5'>
        <li>
            <Link href="/">
            <FaGithub/>
            </Link>
        </li>

        <li>
        <Link href="/">
        <FaInstagram
        /></Link></li>

        <li>
        <Link href="/">
        <FaLinkedin />
        </Link></li>

        <li>
          <Link href="/"><FaWhatsapp/>
        </Link></li>

    </ul>
        

  )
}
