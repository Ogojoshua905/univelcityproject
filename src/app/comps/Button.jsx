"use client"
import { motion } from "framer-motion"

export default function Button({status}) {
  return (
    <motion.button
    //  whileTap={{scale: 0.9}} 
    //  whileHover={{ 
    //   scale: 1.1,}}
    //   transition={{ bounceDamping: 5, bounceStiffness: 100 }}
     className=" bg-slate-700 text-white p-3 hover:bg-purple-700">{status}</motion.button>
  )
}
