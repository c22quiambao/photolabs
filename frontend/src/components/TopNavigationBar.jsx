import React from "react";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigation = ({ topics, isFavPhotoExist }) => {
			console.log("Read Top Nav");
	return (
		<div className="top-nav-bar">
			<span className="top-nav-bar__logo">PhotoLabs</span>
			<TopicList topics={topics} />
			<FavBadge isFavPhotoExist={isFavPhotoExist} />
		</div>
	);
};

export default TopNavigation;
