//code for HomeRoute.jsx
import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ photos, topics }) => {
	console.log("!!!!!! HOME ROUTE!!!!!! ");
	//console.log("---------------------------------------------------");
	//console.log("   topics contents:", topics);
	//console.log("   Is passed topics an Array?", Array.isArray(topics));
	//console.log("   topics is TYPE OF:", typeof topics);
	console.log("   photos contents:", photos);
	console.log("   Is passed photos an Array?", Array.isArray(photos));
	console.log("   photos is TYPE OF :", typeof photos);

	const [favouritePhotos, setFavouritePhotos] = useState([]);

	console.log("   HOME ROUTE - favouritePhotos contents : ", favouritePhotos);
	console.log(
		"   Is favouritePhotos an Array?",
		Array.isArray(favouritePhotos)
	);
	console.log("   favouritePhotos is a TYPE OF :", typeof favouritePhotos);

	console.log(
		"   setFavouritePhotos is a TYPE OF :",
		typeof setFavouritePhotos
	);
	//Handles favourite photos globally
	const toggleFavourite = (photoId) => {
		setFavouritePhotos((prevFavourites) => {
			const isAlreadyFavourite = prevFavourites.includes(photoId);

			const newFavourites = isAlreadyFavourite
				? prevFavourites.filter((id) => id !== photoId)
				: [...prevFavourites, photoId];

			console.log("Previous Favourites:", prevFavourites);
			console.log("Toggling Photo ID:", photoId);
			console.log("Is Already Favourite:", isAlreadyFavourite);
			console.log("New Favourites:", newFavourites);

			return newFavourites;
		});
	};

	//Set state of FavBadge if there is a photo liked
	const [isFavPhotoExist, setIsFavPhotoExist] = useState(favouritePhotos.count);
	const [selected, setSelected] = useState(null);

	const toggleFavBadge = () => {
		setIsFavPhotoExist(!isFavPhotoExist);
		if (!selected) {setSelected(true); }

	};

	return (
		<div className="home-route">
			<TopNavigation
				topics={topics}
				isFavPhotoExist={favouritePhotos.length}
				selected={selected}
			/>
			<PhotoList
				photos={photos}
				favouritePhotos={favouritePhotos}
				toggleFavourite={toggleFavourite}
				toggleFavBadge={toggleFavBadge}
			/>
		</div>
	);
};

export default HomeRoute;
