import React, { useState } from "react";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigation = ({ topics, isFavPhotoExist, selected }) => {
	console.log("!!!!!! TOP NAVIGATION !!!!!! ");
	//console.log("---------------------------------------------------");
	//console.log("   Is Array?", Array.isArray(topics));
	//console.log("   Topics--->:", topics);
	console.log("isFavPhotoExist", isFavPhotoExist);
	console.log("   isFavPhotoExist is TYPE OF :", typeof isFavPhotoExist);
	console.log("selected", selected);
	console.log("   selected is TYPE OF :", typeof selected);

	return (
		<div className="top-nav-bar">
			<span className="top-nav-bar__logo">PhotoLabs</span>
			{/*pass the list of topics to display*/}
			<TopicList topics={topics} />
			{/*pass the state of isFavPhotoExist to change FavBadge display*/}
			<FavBadge
				isFavPhotoExist={!!isFavPhotoExist}
				selected={selected}
			/>
		</div>
	);
};

export default TopNavigation;
