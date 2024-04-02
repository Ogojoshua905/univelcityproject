import BlogCat from "./BlogCat";

export default function layout({children}) {
  return (
    <div>
        <div>
            <BlogCat />
        </div>
      {children}
    </div>
  )
}
