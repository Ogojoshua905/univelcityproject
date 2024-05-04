"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { articles } from "./category/page"
import Button from "./comps/Button"


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

  const iPhone = articles.find(mobile.category == 'iPhone')

  return (
    <AnimatePresence>
    <motion.div>
      <h1 className="text-6xl justify-center text-center mt-8">Master Your Game: Level Up and Conquer!</h1>

      <motion.div
       variants={gridContainerVariants}
       initial="hidden"
        animate="show"
        className="grid lg:grid-cols-3 gap-5 mt-8 text-white rounded-2xl">

        <motion.div variants={gridSquareVariants} className="border border-black bg-blue-950">

        <div
         
        className="flex">

          <motion.h2
           initial={{ opacity: 0, x:100}} 
          animate={{ opacity: 1, x:0 }}
          transition={{duration: 1, ease: "easeOut", delay: 0.2 }} className=" pr-4">
            Agency
          </motion.h2>

          <motion.li
             initial={{ opacity: 0, x:-100}} 
             animate={{ opacity: 1, x:0 }}
             transition={{duration: 1, ease: "easeOut", delay: 0.2 }}
          >February 7 2013</motion.li>
        </div>

          <motion.h2 initial={{ opacity: 0, y:100}} 
          animate={{ opacity: 1, y:0 }}
          transition={{duration: 1, ease: "easeOut", delay: 0.2 }} className="text-2xl hover:text-purple-800">


            <div>
            <Link href="/">Unleash <br />  Your Creativity, <br />
          Your Potential.</Link>
            </div>
          </motion.h2>
          <motion.p initial={{
            opacity: 0, y:-100}} animate={{ opacity:1, y:0}} transition={{duration: 0.4, ease: "easeOut"}}><q>Embark on thrilling adventures, compete in epic battles, and forge unforgettable memories as you navigate through a myriad of gaming landscapes</q></motion.p>
        </motion.div>

        <motion.div variants={gridSquareVariants}
         >
          <Image className=" border-black object-fill transform hover:scale-95 transition ease-in-out duration-500" src='https://images.pexels.com/photos/9072385/pexels-photo-9072385.jpeg?auto=compress&cs=tinysrgb&w=400' alt="don't care" width='500' height='100'/>
        </motion.div>

        <motion.div
         variants={gridSquareVariants} className="  border border-black bg-violet-700 text-white">
          <div className=" leading-8 ml-8 mb-8">

            <p>
<q>
 Step into the virtual realm, where every click unlocks captivating narratives and thought-provoking challenges. Welcome to a world where imagination meets skill, and every game is an adventure waiting to be explored. Embrace the thrill,  ignite your passion, and embark on a gaming odyssey that knows no bounds.
</q>
</p>
            <Button status="Start Reading"></Button>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid grid-col-4 grid-rows-[repeat(8,_350px)] mt-10 w-[1330px] ml-6 border-t-2 border-black">
            <div className=" col-span-1 row-span-1 pt-10 px-4 border-2  border-black border-l-0  border-t-0" key={iPhone.introduction}>
              //
            </div>
      </div>

      <div className="p-4 mt-10 pr-48 pl-48">
        <h2 className="border-black bg-purple-700 p-5">Latest Blog </h2>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}
