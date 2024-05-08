"use client"
import { articles } from "@/app/page"


export default function CategorySlug({params}) {
    const filteredCat = articles.filter(articles => articles.category ==
         params.slug) 
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-7 object-cover pl-4 pr-4">
      {filteredCat.map( articles => (
        <section className={`bg-[url(/media/${articles.category}.jpg)bg-cover h-[300px]]`}>
            <h2>{articles.title}</h2>
        </section>
      ))}
    </div>
  )
}
