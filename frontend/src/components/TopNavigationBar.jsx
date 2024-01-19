import React, { useState } from "react";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigation = ({ topics, isFavPhotoExist }) => {
	console.log("!!!!!! TOP NAVIGATION !!!!!! ");
	//console.log("---------------------------------------------------");
	//console.log("   Is Array?", Array.isArray(topics));
	//console.log("   Topics--->:", topics);
	console.log(
		">>>>>>>>>>>>>>>> isFavPhotoExist data receieved",
		isFavPhotoExist
	);



		return (
			<div className="top-nav-bar">
				<span className="top-nav-bar__logo">PhotoLabs</span>
				<TopicList topics={topics} />
				<FavBadge
					isFavPhotoExist={isFavPhotoExist}
				/>
			</div>
		);
};

export default TopNavigation;
