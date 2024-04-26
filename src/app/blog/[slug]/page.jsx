import { articles } from "../page"


export default function CategorySlug({params}) {
    const filteredCat = articles.filter(articles => articles.category ===
         params.slug) 
  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredCat.map(articles=>(
        <section key={articles.id} className={`bg-[url(/media/${articles.category}.jpg)]`}>
            <h2>{articles.title}</h2>
        </section>
      ))}
    </div>
  )
}
