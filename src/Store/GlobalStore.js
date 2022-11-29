import React, { createContext } from 'react'
import useLocalStorage from 'use-local-storage'

export const GlobalStoreContext = createContext({
	theme: '',
	switchTheme: () => {},
})

const GlobalStore = props => {
	const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
	}

	const providerValue = {
		theme,
		switchTheme,
	}

	return <GlobalStoreContext.Provider value={providerValue}>{props.children}</GlobalStoreContext.Provider>
}

export default GlobalStore
