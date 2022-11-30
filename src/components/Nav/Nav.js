import React, { useContext } from 'react'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import light from '../../assets/icon-moon.svg'
import dark from '../../assets/icon-sun.svg'
import './Nav.scss'

const Nav = () => {
	const GlobalStore = useContext(GlobalStoreContext)
	const handleSwitchTheme = () => {
		GlobalStore.switchTheme()
	}

	return (
		<>
			<div className="navbar">
				<h1 className="header">devfinder</h1>
				<div className="toggle" onClick={handleSwitchTheme}>
				<p>	{GlobalStore.theme === 'dark' ? 'light' : 'dark' }</p>
					<img className="icon" src={GlobalStore.theme === 'light' ? light : dark } alt="" />
				</div>
			</div>
		</>
	)
}

export default Nav
