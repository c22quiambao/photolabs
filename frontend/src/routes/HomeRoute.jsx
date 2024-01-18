//code for HomeRoute.jsx
import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ photos, topics }) => {
	console.log("!!!!!! HOME ROUTE!!!!!! ");
	console.log("---------------------------------------------------");
	console.log("   topics contents:", topics);
	console.log("   Is passed topics an Array?", Array.isArray(topics));
	console.log("   topics is TYPE OF:", typeof topics);
	console.log("   photos contents:", photos);
	console.log("   Is passed photos an Array?", Array.isArray(photos));
	console.log("   photos is TYPE OF :", typeof photos);

	//handles photo liked state
	//const [selected, setSelected] = useState(false);
	// console.log("original selected value", selected);

	//const handleToggle = () => {
	//	console.log("!!!!!handleToggle selected!!!!!", selected);
	//	setSelected(!selected);

	//  if (onClick) {
	//   		console.log("!!!!!!!!!!!");
	//   onClick(!selected);

	//	}

	const [favouritePhotos, setFavouritePhotos] = useState([]);
	console.log("   HOME ROUTE - favouritePhotos contents : ", favouritePhotos);
		console.log(
			"   Is favouritePhotos an Array?",
			Array.isArray(favouritePhotos)
		);
	console.log("  favouritePhotos is a TYPE OF :", typeof favouritePhotos);
	console.log(
		"   HOME ROUTE - setFavouritePhotos contents : ",
		setFavouritePhotos
	);
		console.log(
			"   Is setFavouritePhotos an Array?",
			Array.isArray(setFavouritePhotos)
		);
	console.log("  setFavouritePhotos is a TYPE OF :", typeof setFavouritePhotos);

	const toggleFavourite = (photoId) => {
		setFavouritePhotos((prevFavourites) =>
			prevFavourites.includes(photoId)
				? prevFavourites.filter((id) => id !== photoId)
				: [...prevFavourites, photoId]
		);
	};

	return (
		<div className="home-route">
			<TopNavigation
				topics={topics}
				favouriteCount={favouritePhotos.length}
			/>
			<PhotoList
				photos={photos}
				favouritePhotos={favouritePhotos}
				toggleFavourite={toggleFavourite}
			/>
		</div>
	);
};

export default HomeRoute;
