"use client"
import { SiActivision, SiEpicgames, SiPlaystation5 } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri"
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProfIcons() {
  return (
       <ul className='flex pl-24 mb-5 items-center gap-x-5'>
        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className='hover:border-black hover:bg-black hover:text-white p-2 rounded-full border'>
            <Link href="/">
            <RiTwitterXLine/>
            </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className='hover:text-white p-2 border-yellow-500 hover:border-yellow-400 hover:bg-black rounded-full border'>
        <Link href="https://www.activision.com/">
        <SiActivision
        /></Link></motion.div>

        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className='hover:text-white p-2 border-blue-400 hover:transition hover:ease-in-out hover:border-blue-500 duration-150 hover:bg-blue-500 rounded-full border'>
        <Link href="/">
        <SiEpicgames />
        </Link></motion.div>

        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className='hover:text-white p-2 border-blue-700 hover:transition hover:border-blue-400 duration-150 hover:bg-green-700 rounded-full border'>
          <Link href="/" >
            <SiPlaystation5 />
        </Link></motion.div>

    </ul>
  )
}
