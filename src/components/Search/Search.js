import React, { useRef, useContext, useEffect } from 'react'
import './Search.scss'
import searchIcon from '../../assets/icon-search.svg'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import axios from 'axios'

const Search = () => {
	const serchInput = useRef(null)
	const GlobalStore = useContext(GlobalStoreContext)
	const API = 'https://api.github.com/users/'
	const globalUserName = GlobalStore.userName
	const globalUserImg = GlobalStore.userImg
	const endpoints = `${API}`
	
	const searchForJoined = () => {
		axios({
			method: 'get',
			url: `${API}${globalUserName}`,
		}).then((res) => {
			GlobalStore.changeJoined(res.data.created_at)
		})
	}
	const searchForImg = () => {
		axios.get(`${API}${globalUserName}`)
		.then((res) => {
			GlobalStore.changeImg(res.data.avatar_url)
		})
		.catch((err)=> {
			console.log(err)
		})
	}
	
	const handleSearchUser = () => {
		GlobalStore.changeUser(serchInput.current.value)
		searchForImg()
		searchForJoined() 
		
		
	}


	useEffect(() => {
		searchForJoined() 
		searchForImg()
	  }, [globalUserName,globalUserImg])

	  console.log(globalUserName,globalUserImg)
	
	
	return (
		<>
			<div className="search-bar">
				<div className="search-wrapper">
					<img className="search-icon" src={searchIcon} alt="" />
					<input ref={serchInput}  className="search-input" type="text" placeholder="Search GitHub username…" />
				</div>
				<button onClick={handleSearchUser} className="search-btn">
					Search
				</button>
			</div>
		</>
	)
}

export default Search
