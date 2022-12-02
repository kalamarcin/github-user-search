import React, { useRef, useContext, useEffect } from 'react'
import './Search.scss'
import searchIcon from '../../assets/icon-search.svg'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import axios from 'axios'

const Search = () => {
	const serchInput = useRef(null)
	const GlobalStore = useContext(GlobalStoreContext)
	const globalUserName = GlobalStore.user

	const fetchData = () => {
		const API = 'https://api.github.com/users/'
		const userName = `${API}${globalUserName}`

		axios
			.get(userName)
			.then(res => {
				const UserObj = res.data
				const getName = UserObj.name
				const getCompany = UserObj.company
				const getImg = UserObj.avatar_url
				const getJoined = UserObj.created_at
				const getUserBio = UserObj.bio
				const getPublicRepo = UserObj.public_repos
				const getFollowers = UserObj.followers
				const getFollowing = UserObj.following
				const getLocation = UserObj.location
				const getUserBlog = UserObj.blog
				const getTwitter = UserObj.twitter_username
				const getLogin = UserObj.login

				GlobalStore.changeUserName(getName)
				GlobalStore.changeCompany(getCompany)
				GlobalStore.changeImg(getImg)
				GlobalStore.changeJoined(getJoined)
				GlobalStore.changeUserBio(getUserBio)
				GlobalStore.changePublicRepo(getPublicRepo)
				GlobalStore.changeFollowers(getFollowers)
				GlobalStore.changeFollowing(getFollowing)
				GlobalStore.changeLocation(getLocation)
				GlobalStore.changeUserBlog(getUserBlog)
				GlobalStore.changeUserTwitter(getTwitter)
				GlobalStore.changeLogin(getLogin)
			})
			.catch(err => {
				console.log(err)
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
