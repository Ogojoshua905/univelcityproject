import Link from "next/link"
import React from "react"

export default function PageLinks({title,link}) {
  return (
    <li className="hover:text-red-600">
      <Link href={link}>
      {title}
      </Link>
      </li>
  )
}
