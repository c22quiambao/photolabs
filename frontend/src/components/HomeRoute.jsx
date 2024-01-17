//code for HomeRoute.jsx
import React from "react";
import "./HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = () => {

	return (
		<div className="home-route">
			<TopNavigation />
			<PhotoList />
		</div>
	);
};

export default HomeRoute;
