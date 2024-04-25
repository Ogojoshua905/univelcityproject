import Link from "next/link"

export default function PageLinks({title,link}) {
  return (
    <li className=" hover:text-[#d45f5f]">
      <Link href={link}>
      {title}
      </Link>
      </li>
  )
}
