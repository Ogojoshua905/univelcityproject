import BlogCat from "./BlogCat";

export default function layout({children}) {
  return (
    <div className=" mt-20">
        <div>
            <BlogCat />
        </div>
      {children}
    </div>
  )
}
