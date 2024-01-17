//code for HomeRoute.jsx
import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ photos, topics }) => {
	console.log("!!!!!! HOME ROUTE!!!!!! ");
	console.log("Is Array?", Array.isArray(topics));
	console.log("Topics:", topics);
	console.log("TYPE OF photos:", typeof photos);
	console.log("Is Array?", Array.isArray(photos));
	console.log("photos:", photos);
	return (
		<div className="home-route">
			<TopNavigation topics={topics} />
			<PhotoList photos={photos} />
		</div>
	);
};

export default HomeRoute;
