"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/app/page";

export default function AuthorSection({params}) {
    const authPost = articles.find(auth => auth.title.split(' ').join('-') === params.id);

    // Check if blogpost exists before filtering relatedBlog
    const fromAuth = authPost ? articles.filter(authors => (
        authors.category === authPost.category && authors.title !== authPost.title
    )) : [];
  return (
    <div className=" pl-10">

            {authPost && (
                
            <div>

                <motion.h2
                initial={{opacity: 0, x: 10}}
                animate={{opacity:1, x:0}}
                exit={{opacity: 0, x:10 }}
                transition={{duration: 1}}
                className="text-6xl py-12 text-center">{authPost.author}</motion.h2>

                <Image className="sm:w-full sm:h-auto md:w-auto ml-9 md:h-[70vh] bg-cover md:px-12 md:mx-auto py-9" src={`/media/${authPost.author}.jpg`} alt={authPost.author} width="500" height="500" />
            
                </div>

            )}
            {authPost && (
                <div>
                <p className=" text-center px-28">{authPost.authdescription}</p>
                </div>
            )}
            {authPost && (
                <section className="h-auto py-8">
                    <h2 className="text-3xl py-6 uppercase">Blogs By Author:</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5  mx-12">
                        {fromAuth.map(authors => (
                            <Link className="border border-black leading-loose py-11 dark:border-white hover:duration-700 hover:ease-out hover:bg-gradient-to-tr from-red-500 via-pink-600 to-pink-400 rounded-md" key={authors.id} href={`/blog/${authors.title.split(' ').join('-')}`} title={authors.title}>
                                <section className={`bg-cover h-52 my-4 border-black mx-8`} style={{ backgroundImage: `url(/media/${authors.category}.jpg)` }}>
                                
                                
                                <h2 className=" h-auto w-28 text-center rounded-md bg-black hover:bg-violet-500  font-bold">{authors.category}</h2>
                                </section>

                                    <h2 className=" text-center items-center font-bold text-xl px-8">{authors.title}</h2>
                                    <p className="text-center px-6">{authors.introduction}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
  )
}
