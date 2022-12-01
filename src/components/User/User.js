import React, { useContext } from 'react'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import Moment from 'moment'

import './User.scss'

const User = () => {
	const GlobalStore = useContext(GlobalStoreContext)
	Moment.locale('en')
	const dt = GlobalStore.joined
	const lorem = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'
	return (
		<>
			<div className="user-box">
				<div className="user_info_grid">
					<div className="cell_avatar">
						<img src={GlobalStore.userImg} alt="" />
					</div>
					<div className="cell_data">
						<p className="name">{GlobalStore.userName}</p>
						<p className="login">@{GlobalStore.login}</p>
						<p className="created">Joined {Moment(dt).format('d MMM yyyy')}</p>
					</div>
				</div>
				<div className="user-decription">{GlobalStore.userBio == null ? lorem : GlobalStore.userBio}</div>
				<div className="status_grid">
					<div className="columns">
						<p className="title">Repos</p>
						<p className="count">{GlobalStore.publicRepo}</p>
					</div>
					<div className="columns">
						<p className='title'>Followers</p>
						<p className='count'>{GlobalStore.followers}</p>
					</div>
					<div className="columns">
						<p className='title'>Following</p>
						<p className='count'>{GlobalStore.following}</p>
					</div>
				</div>
				<div className="user-contact"></div>
			</div>
		</>
	)
}

export default User
