import React, { createContext, useState } from 'react'
import useLocalStorage from 'use-local-storage'

export const GlobalStoreContext = createContext({
	theme: '',
	switchTheme: () => {},
	userName: '',
	userURL: '',
	joined: '',
	userBio: '',
	publicRepo: '',
	fallowers: '',
	location: '',
	userBlog: '',
	userTwitter: '',
	data: '',
	userImg:'',
	changeUser: () => {},
	changeJoined: () => {},
	handlerImg: () => {}
	
})

const GlobalStore = props => {
	const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
	}
	const [userName, setUserName] = useState('octocat')
	const [userImg, setUserImg] = useState('')
	const [userURL, setUserURL] = useState('')
	const [joined, setJoined] = useState('')
	const [userBio, setUserBio] = useState('')
	const [publicRepo, setPublicRepo] = useState('')
	const [fallowers, setFallowers] = useState('')
	const [location, setLocation] = useState('')
	const [userBlog, setUserBlog] = useState('')
	const [userTwitter, setUserTwitter] = useState('')
	const [data, setData] = useState('')

	const handlerChangeLog = newName => {
		setUserName(newName)
	}

	const handlerJoined = newName => {
		setJoined(newName)
	}
	const handlerImg = newName => {
		setUserImg(newName)
	}

	const providerValue = {
		theme,
		switchTheme,
		userName,
		userURL,
		joined,
		userBio,
		publicRepo,
		fallowers,
		location,
		userBlog,
		userTwitter,
		data,
		userImg,
		changeUser: handlerChangeLog,
		changeJoined: handlerJoined,
		changeImg: handlerImg
	}

	return <GlobalStoreContext.Provider value={providerValue}>{props.children}</GlobalStoreContext.Provider>
}

export default GlobalStore
