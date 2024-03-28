import React from "react"

export default function Catlinks({props}) {
  return (
    <span className={`inline-block py-4 px-6 m-3 uppercase gap-3 ${props.bg}`}>{props.title}</span>
  )
}
