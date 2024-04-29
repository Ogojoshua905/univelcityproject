import { articles } from "./page"
import Link from "next/link"

const articlesCat = articles.map(cat => (
    <h2 key={cat.id} className="hover:bg-black hover:text-white border-2 border-black p-4"><Link href={`/category/${cat.category}`} title={cat.category}>{cat.category}</Link>
    </h2>
))

export default function BlogCat() {
  return (
    <div className="w-3/5 m-auto p-8">

        <section className="flex items-center justify-center">
            {articlesCat}
          <h2 className=" focus:bg-black hover:bg-black hover:text-white border-4 border-black p-4"><Link href={`/category/`} title={`All Categories`}>
              All
            </Link>
            </h2>
        </section>
      
    </div>
  )
}
