"use client"
import Image from "next/image";
import { articles } from "../page";
import Link from "next/link";
import BlogCat from "./BlogCat";
import { useState } from "react";
  
export default function Category() {

const [search, setSearch] = useState(' ');

  function searchItems(e) {
    setSearch(e.target.value)
  }

  const filteredArticle = articles.filter( article => article.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>

      <h1 className=" text-center pt-8 text-6xl">Uncover Engaging Adventures</h1>

        <div>
          <Image className="sm:w-auto object-center sm:h-auto md:w-[170vh] sm:ml-0 md:ml-0 lg:ml-9 md:h-[70vh] sm:bg-contain lg:bg-cover bg-cover md:pl-12 md:mx-auto py-12" src="/media/Abstract.jpg" height="500" width="400" alt="Blog Page"/>
        </div>

        <div className='flex justify-between'>
            <h2 className=" text-3xl pl-9">All Post</h2>  
            <div className=" end-0 right-0"><BlogCat /></div>
          </div>
    
      <div className=" w-3/5 m-auto my-6 border rounded-lg">
        <input type="text" name="search" id="search" placeholder="Search" className="w-full rounded-lg text-black dark:text-gray-600 py-3 outline-red-500 border-red-500" defaultValue={search} onChange={searchItems}/>
      </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5  mx-12">
    {filteredArticle.map(article => (
      <div key={article.id} className="border border-black leading-loose dark:border-white hover:duration-700 hover:ease-out hover:bg-gradient-to-tr from-red-500 via-pink-600 to-pink-400 rounded-md">
        <Link href={`/blog/${article.title.split(' ').join('-')}`} title={article.title}>
          <section className={`bg-cover h-52 my-4 border-black mx-8`} style={{backgroundImage: `url(/media/${article.category}.jpg)`}}>

            <div className=" text-center">
          <h2 className=" h-auto w-28 text-center rounded-md text-white bg-black hover:bg-violet-500  font-bold">{article.category}</h2>
            </div>
          </section>
          <span className=" text-center items-center text-xl px-8">{article.title}</span>
          <p className="  text-center px-6">{article.introduction}</p>
        </Link>
      </div>
    ))}
  </div>
    </div>
  )
}
