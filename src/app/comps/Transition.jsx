"use client"
import { AnimatePresence, animate, delay, easeInOut, motion } from "framer-motion"

// variants
const transitionVariants = {
  initial:{
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
}

export default function Transition() {
  return (
    <div>
      <motion.div className=" fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-purple-500"
       variants={transitionVariants} initial="initial"  
       animate="animate"
        exit="exit"
         transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}></motion.div>
      <motion.div className=" fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#9147FF]"
       variants={transitionVariants} initial="initial" 
       animate="animate"
        exit="exit"
         transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}></motion.div>
      <motion.div className=" fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#af7aff]"
       variants={transitionVariants} initial="initial" 
       animate="animate"
        exit="exit"
         transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}></motion.div>
    </div>
  )
}

