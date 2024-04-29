import { articles } from "@/app/category/page" 
import Image from "next/image"

export default function BlogSection({params}) {
    
    const blogpost = articles.find(post => post.title.split(' ').join('-') == params.id)
  
    const relatedBlog = articles.filter(articles => (articles.category == blogpost.category) && (articles.title !== blogpost.title ))

    return(
        <div className="w-4/5 m-auto text-3xl">
            <Image src={`/media/${blogpost.category}.jpg`} alt={blogpost.title} width="500" height="500" />
            <h2>{blogpost.title}</h2>
            <h2>Description</h2>
            {
                blogpost.description.map((para,index) => (
                    <p key={index}>{para}</p>
                ) )
            }

            <section className="h-[400px] py-8 uppercase">
                <h2>related content</h2>
                <div className="grid grid-cols-2 gap-4 mb-7 object-cover pl-4 pr-4">
      {relatedBlog.map(articles => (
        <Link key={articles.id} href={`/blog/${articles.title.split(' ').join('-')}`} title={articles.title}>
        <section  className={`bg-cover h-[300px]`} style={{backgroundImage: `url(/media/${articles.category}.jpg)`}}>
            <h2>{articles.title}</h2>
        </section>
        </Link>
      ))}
    </div>
            </section>
        </div>
    )
  }
  