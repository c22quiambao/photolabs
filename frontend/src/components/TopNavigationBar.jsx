import React from "react";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigation = ({ topics, isFavPhotoExist, setSelectedTopic }) => {
	return (
		<div className="top-nav-bar">
			<span className="top-nav-bar__logo">PhotoLabs</span>
			<TopicList
				topics={topics}
				setSelectedTopic={setSelectedTopic}
			/>
			<FavBadge isFavPhotoExist={isFavPhotoExist} />
		</div>
	);
};

export default TopNavigation;
