"use client"
import { articles } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection({ params }) {
    const blogpost = articles.find(post => post.title.split(' ').join('-') === params.id);

    // Check if blogpost exists before filtering relatedBlog
    const relatedBlog = blogpost ? articles.filter(article => (
        article.category === blogpost.category && article.title !== blogpost.title
    )) : [];

    return (
        <div className=" pl-10">
            {blogpost && (
                <Image className="sm:w-full sm:h-auto md:w-[170vh] ml-9 md:h-[70vh] bg-cover md:pl-12 md:mx-auto py-12" src={`/media/${blogpost.category}.jpg`} alt={blogpost.title} width="500" height="500" />
            )}
            {blogpost && (
                <>
                    <h2 className="text-3xl text-center">{blogpost.title}</h2>
                    <h2 className="text-2xl text-center">Description</h2>
                    {blogpost.description.map((para, index) => (
                        <p className="items-center text-center leading-relaxed" key={index}>{para}</p>
                    ))}
                </>
            )}
            {blogpost && (
                <section className="h-[400px] py-8">
                    <h2 className="text-3xl uppercase">related content</h2>
                    <div className="grid grid-cols-2 gap-4 mb-7 object-cover pl-4 pr-4">
                        {relatedBlog.map(article => (
                            <Link key={article.id} href={`/blog/${article.title.split(' ').join('-')}`} title={article.title}>
                                <section className={`bg-cover h-[300px]`} style={{ backgroundImage: `url(/media/${article.category}.jpg)` }}>
                                    <h2>{article.title}</h2>
                                </section>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
