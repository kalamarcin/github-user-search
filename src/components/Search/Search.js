import React from 'react'
import './Search.scss'
import searchIcon from '../../assets/icon-search.svg'

const Search = () => {
  return (
   <>
   <div className="search-bar">
    <img className='search-icon' src={searchIcon} alt="" />
    <input className='search-input' type="text" />
    <button className='search-btn' >Search</button>
   </div>
   </>
  )
}

export default Search