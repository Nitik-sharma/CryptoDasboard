import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
function Search({search,searchBox}) {
  return (
    <div className='search-flex'>
       <SearchIcon className='s-icon'/>
       <input placeholder='search ...' type='text' value={search} onChange={(e)=>searchBox(e)}/>
    </div>
  )
}

export default Search
