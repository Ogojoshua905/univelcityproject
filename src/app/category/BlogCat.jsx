'use client'
import { articles } from "../page"
import Link from "next/link"
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineMoreHoriz } from "react-icons/md";

const articlesCat = articles.map(cat => (
    <h2 key={cat.id} className="hover:bg-black rounded-lg dark:hover:bg-white dark:hover:text-black dark:border-white hover:text-white border-2 border-black p-4"><Link href={`/category/${cat.category}`} title={cat.category}>{cat.category}</Link>
    </h2>
)).slice(2,8)

export default function BlogCat() {

  const [isClick, setisClick] = useState(false)

  const toggleArtCat = () => {
    setisClick(!isClick)
  };

  const closeArtCat = () => {
    setisClick(false);
  };

  return (
    <div className="w-3/5 m-auto p-8 ">

    <div className=" md:hidden flex" onClick={toggleArtCat}>

      <button className=" text-2xl px-6 items-center border-4 rounded-md object-center border-pink-800">
      {isClick ? (<MdOutlineMoreHoriz /> ) : (<MdOutlineMoreHoriz />)
      }
      </button>
    </div>

        <section className="items-center md:flex hidden justify-center">
            {articlesCat}
          <h2 className=" focus:bg-black dark:hover:bg-white dark:border-white hover:text-white border-4 border-black p-4"><Link href={`/category/`} title={`All Categories`}>
              All
            </Link>
            </h2>
        </section>


        {isClick && (
      <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='md:hidden block px-2 pt-2 pb-3 space-y-1 sm:px-3' onClick={closeArtCat}>
            
         <section className="items-center justify-center mouse-pointer">
            {articlesCat}
          <h2 className=" focus:bg-black dark:hover:bg-white dark:border-white hover:text-white border-4 border-black p-4"><Link href={`/category/`} title={`All Categories`}>
              All
            </Link>
            </h2>
        </section>
            
      </motion.div>
          
    )}
    </div>
  )
}
