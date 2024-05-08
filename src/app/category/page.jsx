"use client"
import Image from "next/image";
import { articles } from "../page";
import Link from "next/link";
import { useState } from "react";
  
export default function Category() {

const [search, setSearch] = useState(' ');

  function searchItems(e) {
    setSearch(e.target.value)
  }

  const filteredArticle = articles.filter( article => article.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>

      <div className=" w-3/5 m-auto my-6">
        <input type="text" name="search" id="search" placeholder="Search" className="w-full rounded-full py-3 outline-red-500 border-red-500" defaultValue={search} onChange={searchItems}/>
      </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5">
    {filteredArticle.map(article => (
      <div key={article.id} className="border border-black dark:border-white rounded-md">
        <Link href={`/blog/${article.title.split(' ').join('-')}`} title={article.title}>
          <section className={`bg-cover h-56`} style={{backgroundImage: `url(/media/${article.category}.jpg)`}}>
            
          <h2 className="text-2xl inset-3 bg-black bg-opacity-50">{article.title}</h2>
          </section>
        </Link>
      </div>
    ))}
  </div>
    </div>
  )
}
