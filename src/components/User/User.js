import React, { useContext } from 'react'
import avatar from '../../assets/icon-company.svg'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import './User.scss'

const User = () => {
	const GlobalStore = useContext(GlobalStoreContext)
	return (
		<>
			<div className="user-box">
				<div className="user-info">
					<div className="avatar"><img src={GlobalStore.userImg} alt="" /></div>
				</div>
				<div className="user-decription">
					<p>Login: {GlobalStore.login}</p>
					<p>{GlobalStore.joined}</p>
				</div>
				<div className="stats-box">
					<div className="repos"></div>
					<div className="follower"></div>
					<div className="following"></div>
				</div>
				<div className="user-contact"></div>
			</div>
		</>
	)
}

export default User
