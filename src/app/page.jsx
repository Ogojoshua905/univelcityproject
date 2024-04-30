"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { articles } from "./category/page"


const gridContainerVariants = {
    hidden:{opacity:0},
    show: {opacity: 1,
    transition:{
      staggerChildren: 0.25,
    },},
    }

    const gridSquareVariants = {
      hidden: {opacity: 0}, show: {opacity: 1}
    }
export default function Home() {
  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity:1,

        show:{opacity:0,
          transition:{
            staggerChildren: 0.25,
            duration: 0.75,
            
          }
        }
      }}
      whileInView={{
        opacity:1
      }}
      viewport={{
        amount:"all"
      }}>
      <h1 className="text-6xl justify-center text-center mt-8">Master Your Game: Level Up and Conquer!</h1>

      <motion.div
       variants={gridContainerVariants}
       initial="hidden"
        animate="show"
        className="grid lg:grid-cols-3 gap-5 mt-8 text-white rounded-2xl">

        <motion.div variants={gridSquareVariants} className="border border-black bg-blue-950">
          <motion.h2 initial={{ opacity: 0, y:100}} 
          animate={{ opacity: 1, y:0 }}
          transition={{duration: 1, ease: "easeOut", delay: 0.2 }} className="text-2xl hover:text-purple-800"><Link href="/">Unleash <br />  Your Creativity, <br />
          Your Potential.</Link></motion.h2>
          <motion.p initial={{
            opacity: 0, y:-100}} animate={{ opacity:1, y:0}} transition={{duration: 0.4, ease: "easeOut"}}><q>Embark on thrilling adventures, compete in epic battles, and forge unforgettable memories as you navigate through a myriad of gaming landscapes</q></motion.p>
        </motion.div>

        <motion.div variants={gridSquareVariants}
         className=" border-black object-fill transform hover:scale-95 transition ease-in-out duration-500 relative">
          <Image className="hover: bg-cover" src='https://images.pexels.com/photos/9072385/pexels-photo-9072385.jpeg?auto=compress&cs=tinysrgb&w=400' alt="don't care" width='500' height='100'/>
        </motion.div>

        <motion.div
         variants={gridSquareVariants} className="  border border-black bg-violet-700 text-white">
            <p>
<q>
 Step into the virtual realm, where every click unlocks captivating narratives and thought-provoking challenges. Welcome to a world where imagination meets skill, and every game is an adventure waiting to be explored. Embrace the thrill,  ignite your passion, and embark on a gaming odyssey that knows no bounds.
</q>
</p>
        </motion.div>
      </motion.div>

      <div className="grid grid-col-3 grid-rows-[5]">
            <div className=" col-span-1">

            </div>

            <div className="">

            </div>

            <div className=" row-span-2">

            </div>

            <div>

            </div>

            <div>

            </div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}
