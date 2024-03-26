import React from "react"

export default function Catlinks({title, bg}) {
  return (
    <span className={`inline-block hover:cursor-move py-4 px-6 m-3 uppercase gap-3 ${bg}`}>{title}</span>
  )
}
