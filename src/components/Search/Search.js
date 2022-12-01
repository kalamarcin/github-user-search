import React, { useRef, useContext, useEffect } from 'react'
import './Search.scss'
import searchIcon from '../../assets/icon-search.svg'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import axios from 'axios'

const Search = () => {
	const serchInput = useRef(null)
	const GlobalStore = useContext(GlobalStoreContext)
	const globalUserName = GlobalStore.user
	const API = 'https://api.github.com/users/'
	
	const fetchData = () => {
		
		const userName = `${API}${globalUserName}`
		
		axios.get(userName)
			.then(res => {
				const getName = res.data.name
				const getCompany = res.data.company
				const getImg = res.data.avatar_url
				const getJoined = res.data.updated_at
				const getUserBio = res.data.bio
				const getPublicRepo = res.data.public_repos
				const getFollowers  = res.data.followers
				const getLocation  = res.data.location
				const getUserBlog  = res.data.blog
				const getTwitter  = res.data.twitter_username
				const getLogin  = res.data.login

				GlobalStore.changeCompany(getName)
				GlobalStore.changeCompany(getCompany)
				GlobalStore.changeImg(getImg)
				GlobalStore.changeJoined(getJoined)
				GlobalStore.changeUserBio(getUserBio)
				GlobalStore.changePublicRepo(getPublicRepo)
				GlobalStore.changeFollowers(getFollowers)
				GlobalStore.changeLocation(getLocation)
				GlobalStore.changeUserBlog(getUserBlog)
				GlobalStore.changeUserTwitter(getTwitter)
				GlobalStore.changeLogin(getLogin)

			})
			.catch(err => {
				console.log(err);
			})
	}

	const handleSearchUser = () => {
		GlobalStore.changeUser(serchInput.current.value)
		fetchData()
	}

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [globalUserName])

	return (
		<>
			<div className="search-bar">
				<div className="search-wrapper">
					<img className="search-icon" src={searchIcon} alt="" />
					<input ref={serchInput} className="search-input" type="text" placeholder="Search GitHub username…" />
				</div>
				<button onClick={handleSearchUser} className="search-btn">
					Search
				</button>
			</div>
		</>
	)
}

export default Search
