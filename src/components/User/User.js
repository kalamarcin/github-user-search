import React, { useContext } from 'react'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import Moment from 'moment'
import locationIcon from '../../assets/icon-location.svg'
import blogIcon from '../../assets/icon-website.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import CompanyIcon from '../../assets/icon-company.svg'

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
						<p className="title">Followers</p>
						<p className="count">{GlobalStore.followers}</p>
					</div>
					<div className="columns">
						<p className="title">Following</p>
						<p className="count">{GlobalStore.following}</p>
					</div>
				</div>
				<div className="user-contact">
					<p className="icon_p">
						<i className="fa-solid fa-location-dot"></i>
						{GlobalStore.location}
					</p>
					<p className="icon_p">
						<i className="fa-sharp fa-solid fa-link"></i>
						<a href={GlobalStore.userBlog}>{GlobalStore.userBlog}</a>
					</p>
					<p className={GlobalStore.userTwitter === null ? 'empty' : 'icon_p'}>
						<i className="fa-brands fa-twitter"></i>
						{GlobalStore.userTwitter === null ? 'Not Available' : GlobalStore.userTwitter}
					</p>
					<p className={GlobalStore.userCompany === null ? 'empty' : 'icon_p'}>
						<i className="fa-solid fa-building"></i>
						{GlobalStore.userCompany === null ? 'Not Available' : GlobalStore.userCompany}
					</p>
				</div>
			</div>
		</>
	)
}

export default User
