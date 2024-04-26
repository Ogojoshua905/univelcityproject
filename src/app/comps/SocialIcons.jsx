"use client"
import { motion } from "framer-motion"
import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, } from 'react-icons/fa'
import { GiQueenCrown } from 'react-icons/gi'
import Link from 'next/link'

export default function SocialIcons() {
  return (
   
    <ul className='flex items-center gap-x-5'>
        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className='hover:text-white p-2 rounded-full border'>
            <Link href="/">
            <FaGithub/>
            </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className='hover:text-white p-2 border-red-500 hover:border-red-400 hover:bg-red-400 rounded-full border'>
        <Link href="https://www.instagram.com/officialalgebra905/">
        <FaInstagram
        /></Link></motion.div>

        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className='hover:text-white p-2 border-green-400 hover:transition hover:ease-in-out hover:border-blue-500 duration-150 hover:bg-blue-500 rounded-full border'>
        <Link href="/">
        <FaLinkedin />
        </Link></motion.div>

        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className='hover:text-white p-2 border-blue-700 hover:transition hover:border-green-600 duration-150 hover:bg-green-700 rounded-full border'>
          <Link href="/" >
            <FaWhatsapp/>
        </Link></motion.div>

    </ul>
        

  )
}
