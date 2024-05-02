"use client"
import Link from "next/link"
import {motion} from "framer-motion"

export default function PageLinks({title,link}) {
  return (
    <motion.div whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    // drag="x"
    // dragConstraints={{ left: -100, right: 100 }}
     className=" hover:text-[#d45f5f]">
      <Link href={link}>
      {title}
      </Link>
      </motion.div>
  )
}
