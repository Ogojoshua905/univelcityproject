"use client"
import { articles } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";


export default function BlogSection({ params }) {
    const blogpost = articles.find(post => post.title.split(' ').join('-') === params.id);

    // Check if blogpost exists before filtering relatedBlog
    const relatedBlog = blogpost ? articles.filter(article => (
        article.category === blogpost.category && article.title !== blogpost.title
    )) : [];

    return (
        <div className=" pl-10">

            {blogpost && (
                
            <div>

                <motion.h2
                initial={{opacity: 0, x: 10}}
                animate={{opacity:1, x:0}}
                exit={{opacity: 0, x:10 }}
                transition={{duration: 1}}
                className="text-6xl py-12 text-center">{blogpost.title}</motion.h2>

                <Image className="sm:w-full sm:h-auto md:w-[170vh] ml-9 md:h-[70vh] bg-cover md:px-12 md:mx-auto py-9" src={`/media/${blogpost.category}.jpg`} alt={blogpost.title} width="500" height="500" />
            
                </div>

            )}
            {blogpost && (
                <div>
                
                <div className='flex mx-12 justify-between border-b-2'>
                <p className=" mt-[2px] text-2xl">{new Date(blogpost.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p> 
           <Link href={`/category/${blogpost.category}`}><button className="w-auto py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2">{blogpost.category}</button></Link>
          </div>
                    
                   
                    {blogpost.description.map((para, index) => (
                        <p className="items-center py-10 text-center leading-relaxed px-12" key={index}>{para}</p>
                        
                    ))}
                </div>
            )}
            {blogpost && (
                <section className="h-auto py-8">
                    <h2 className="text-3xl py-6 uppercase">related content:</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5  mx-12">
                        {relatedBlog.map(article => (
                            <Link className="border border-black leading-loose py-11 dark:border-white hover:duration-700 hover:ease-out hover:bg-gradient-to-tr from-red-500 via-pink-600 to-pink-400 rounded-md" key={article.id} href={`/blog/${article.title.split(' ').join('-')}`} title={article.title}>
                                <section className={`bg-cover h-52 my-4 border-black mx-8`} style={{ backgroundImage: `url(/media/${article.category}.jpg)` }}>
                                
                                
                                <h2 className=" h-auto w-28 text-center rounded-md bg-black hover:bg-violet-500  font-bold">{article.category}</h2>
                                </section>

                                    <h2 className=" text-center items-center font-bold text-xl px-8">{article.title}</h2>
                                    <p className="text-center px-6">{article.introduction}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
