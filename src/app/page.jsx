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

  const iPhone = articles.find(game => game.category == 'iPhone')
  const Samsung = articles.find(game => game.category == 'Samsung')
  const eSports = articles.find(game => game.category == 'eSports')
  const Mobile = articles.find(game => game.category == 'Mobile-Gaming')
  const BRG = articles.find(game => game.category == 'Battle-Royale-Games')

  return (
    <AnimatePresence>
    <motion.div>
      <h1 className="text-6xl justify-center text-center mt-8">Master Your Game: Level Up and Conquer!</h1>

      <motion.div
       variants={gridContainerVariants}
       initial="hidden"
        animate="show"
        className="grid lg:grid-cols-3 gap-5 mt-8 text-white rounded-2xl">

        <motion.div variants={gridSquareVariants} className="border border-black bg-gradient-to-tl from-purple-400 to-purple-900">

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
         variants={gridSquareVariants} className="  border bg-gradient-to-tr from-red-500 via-green-500 to-blue-500  text-white">
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

      <div className="md:grid md:grid-col-4 grid-rows-[repeat(5)] mt-10 max-w-max ml-6 border-t-2 dark:border-red-700 border-black">
            <div className=" col-span-1 row-span-1 col-start-1 pt-10 px-4 border-2  border-black border-l-0 dark:border-red-700  border-t-0" key={iPhone.id}>
            <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 hover:bg-gradient-to-br from-black to-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"><Link href="/">{iPhone.category}</Link></button>
              <p className="text-3xl font-bold hover:text-purple-500 hover:transition-all">{iPhone.title}</p>
              <p className=" text-xl pb-16"> {iPhone.description[1]}</p>
              <p className=" mt-[2px] text-2xl">{new Date(iPhone.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
            </div>

            <div className=" col-span-1 row-span-1 col-start-2 pt-10 px-4 border-2  border-black dark:border-red-700 border-l-0  border-t-0" key={Samsung.id}>
            <Link href="/">
            <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 rounded-lg hover:bg-gradient-to-tr from-blue-600 to-white focus:outline-none focus:ring-2 focus:ring-offset-2">{Samsung.category}</button></Link>
              <Link href="/"><p className="text-3xl font-bold hover:text-purple-500 hover:transition-all hover:cursor-pointer">{Samsung.title}</p></Link>
              <p className=" text-xl pb-16">{Samsung.introduction}</p>
              <p className=" mt-[2px] text-2xl">{new Date(Samsung.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
            </div>

            <div className=" col-span-2 w-auto row-span-2 col-start-3">
              <img src="/media/Talking.jpg" className="h-[700px] border-b-2 border-black"/>
            </div>
            {
              <div className=" col-span-1 row-span-1 p-4 border-2 border-black border-l-0 dark:border-red-700 border-t-0" key={Mobile.id}>
                <Link href="/">
                <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white rounded-lg bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2">{Mobile.category}</button></Link>
                <p className=" text-3xl font-bold capitalize hover:text-purple-500 hover:transition-all"><Link href="/">{Mobile.title}</Link></p>
                <p className=" text-xl pb-16">{Mobile.description[1]}</p>
                <p className=" mt-[2px] text-2xl">{new Date(Mobile.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>

              </div>
            }

            {
             <div className = "col-span-1 row-span-1 pt-10 px-4 border-2  border-black dark:border-red-800 border-l-0  border-t-0" key={BRG.id}>
              <Link href="/">
             <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2">{BRG.category}</button></Link>
            <Link href="/"><p className="text-3xl font-bold hover:text-purple-500 hover:transition-all">{BRG.title}</p></Link>
             <p className=" text-xl pb-16"> {BRG.description[1]}</p>
             <p className=" mt-[2px] text-2xl">{new Date(BRG.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
           </div>
            }
            
      </div>

      <div className="p-4 mt-10 pr-48 pl-48">
        <h2 className="border-black bg-purple-700 p-5">Latest Blog </h2>
      </div>


      <div className=" grid grid-cols-3 pl-28 pr-24">
            <div className=" col-span-2">

              <div>
              <img className=" mt-8 mb-6 w-full h-full" src="https://images.pexels.com/photos/9072385/pexels-photo-9072385.jpeg?auto=compress&cs=tinysrgb&w=400" alt="don't care" />

              <div className=" flex space-x-2">
              <Link href="/">
            <button type="submit" className="py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 rounded-lg hover:bg-gradient-to-tr from-blue-600 to-white focus:outline-none focus:ring-2 focus:ring-offset-2">{Samsung.category}</button></Link>
            <p className=" mt-[2px] text-2xl">{new Date(Mobile.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
              </div>
              <h1 className=" text-xl">Unleash Your Creativity, Your Potential</h1>
              <p></p>
              </div>


            </div>

            <div className=" col-span-1 col-start-2">

            </div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}
