"use client"
import { articles } from "@/app/page"
import Link from "next/link"
import Image from "next/image"


export default function CategorySlug({params}) {
    const filteredCat = articles.filter(article => article.category ==
         params.slug) 
  return (
    // <div className="grid md:grid-cols-3 gap-4 mb-7 object-cover pl-4 pr-4">
    //   {filteredCat.map( article => (
    //     <section className={`bg-[url(/media/${article.category}.jpg)bg-cover h-[300px]]`}>
    //         <h2>{article.title}</h2>
    //     </section>
    //   ))}
    // </div>
    <div>
      <div>
        <h1 className=" text-center text-5xl my-4">{params.slug}</h1>

        <div>
          <Image className="sm:w-auto sm:h-auto md:w-[170vh] ml-9 md:h-[70vh] bg-cover md:pl-12 md:mx-auto py-12" src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="500" width="400" alt="Blog Page"/>
        </div>
      </div>


    <div className="grid md:grid-cols-2 my-5 lg:grid-cols-3 sm:grid-cols-1 gap-5  mx-12">
    {filteredCat.map(article => (
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
