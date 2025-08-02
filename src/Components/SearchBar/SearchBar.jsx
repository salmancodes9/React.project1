import React, { useState } from 'react'

const SearchBar = () => {

    const [search, setSearch] = useState("");

   

  return (
    <>
      <input type="text" value={search} className='searchBar' placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
      {search}
    </>
  )
}

export default SearchBar
