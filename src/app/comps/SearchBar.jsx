"use client"

import { useState } from "react"


export default function SearchBar({onSearch}) {

    const [searchQuery, setSearchQuery] = useState(' ')

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
    </div>
  )
}
