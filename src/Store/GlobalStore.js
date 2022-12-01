import React, { createContext, useState } from 'react'
import useLocalStorage from 'use-local-storage'

export const GlobalStoreContext = createContext({
	//theme
	theme: '',
	switchTheme: () => {},
	//Fetch
	user: '',
	userName: '',
	userCompany: '',
	joined: '',
	userBio: '',
	publicRepo: '',
	followers: '',
	following: '',
	location: '',
	userBlog: '',
	userTwitter: '',
	login: '',
	userImg: '',
	//setMethod
	changeUser: () => {},
	changeJoined: () => {},
	changeImg: () => {},
	changeCompany: () => {},
	changeUserBio: () => {},
	changePublicRepo: () => {},
	changeFollowers: () => {},
	changeFollowing: () => {},
	changeLocation: () => {},
	changeUserBlog: () => {},
	changeUserTwitter: () => {},
	changeLogin: () => {},
	changeUserName: () => {},
})

const GlobalStore = props => {
	const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
	}
	const [user, setUser] = useState('octocat')
	const [userName, setUserName] = useState('')
	const [userImg, setUserImg] = useState('')
	const [userCompany, setUserCompany] = useState('')
	const [joined, setJoined] = useState('')
	const [userBio, setUserBio] = useState('')
	const [publicRepo, setPublicRepo] = useState('')
	const [followers, setFollowers] = useState('')
	const [following, setFollowing] = useState('')
	const [location, setLocation] = useState('')
	const [userBlog, setUserBlog] = useState('')
	const [userTwitter, setUserTwitter] = useState('')
	const [login, setLogin] = useState('')

	const handlerChangeUser = newUser => {
		setUser(newUser)
	}
	const handlerChangeUserName = newName => {
		setUserName(newName)
	}
	const handlerJoined = newJoin => {
		setJoined(newJoin)
	}
	const handlerImg = newImg => {
		setUserImg(newImg)
	}

	const handlerCompany = newCompany => {
		setUserCompany(newCompany)
	}

	const handlerUserBio = newBio => {
		setUserBio(newBio)
	}

	const handlerPublicRepo = newPublic => {
		setPublicRepo(newPublic)
	}
	const handlerFollowers = newFollowers => {
		setFollowers(newFollowers)
	}
	const handlerFollowing = newFollwing => {
		setFollowing(newFollwing)
	}
	const handlerLocation = newLocation => {
		setLocation(newLocation)
	}

	const handlerUserBlog = newUserBlog => {
		setUserBlog(newUserBlog)
	}

	const handlerUserTwitter = newUserTwitter => {
		setUserTwitter(newUserTwitter)
	}

	const handlerLogin = newLogin => {
		setLogin(newLogin)
	}

	const providerValue = {
		//theme
		theme,
		switchTheme,
		//fetch
		user,
		userName,
		userCompany,
		joined,
		userBio,
		publicRepo,
		followers,
		following,
		location,
		userBlog,
		userTwitter,
		login,
		userImg,
		//setMethod
		changeUser: handlerChangeUser,
		changeJoined: handlerJoined,
		changeImg: handlerImg,
		changeCompany: handlerCompany,
		changeUserBio: handlerUserBio,
		changePublicRepo: handlerPublicRepo,
		changeFollowers: handlerFollowers,
		changeFollowing: handlerFollowing,
		changeLocation: handlerLocation,
		changeUserBlog: handlerUserBlog,
		changeUserTwitter: handlerUserTwitter,
		changeLogin: handlerLogin,
		changeUserName: handlerChangeUserName,
	}

	return <GlobalStoreContext.Provider value={providerValue}>{props.children}</GlobalStoreContext.Provider>
}

export default GlobalStore
