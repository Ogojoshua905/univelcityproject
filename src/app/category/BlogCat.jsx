import { articles } from "./page"
import Link from "next/link"

const resourcesCat = articles.map(cat => (
    <h2 key={cat.id} className="border-2 p-4"><Link href={`/category/${cat.category}`} title="cat.category">{cat.category}</Link>
    </h2>
))

export default function BlogCat() {
  return (
    <div className="w-3/5 m-auto p-8">

        <section className="flex items-center justify-center gap-6">
          <h2 className="border-2 p-4"><Link href={`/category/`} title="All Categories">
              All
            </Link>
            </h2>
            {resourcesCat}
        </section>
      
    </div>
  )
}
