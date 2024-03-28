import { articles } from "./page"

const resourcesCat = articles.map(cat => (
    <h2 key={cat.id} className="border-2 p-4">{cat.category}</h2>
))

export default function BlogCat() {
  return (
    <div className="w-3/5 m-auto p-8">
        <section className="flex justify-center gap-6">
            {resourcesCat}
        </section>
      
    </div>
  )
}
