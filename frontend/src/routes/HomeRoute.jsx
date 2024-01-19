//code for HomeRoute.jsx
import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({
	topics,
	photos,
	favouritePhotos,
	isFavPhotoExist,
	updateFavourites,
	isModalOpen,
	openModal,
}) => {
	console.log("Read Home");

	console.log("HOME!!!!!");
	console.log("photo", photos);
	console.log("favouritePhotos------>", favouritePhotos);
	console.log("isModalOpen", isModalOpen);
	//console.log("selectedPhoto", selectedPhoto);

	return (
		<div className="home-route">
			<TopNavigation
				topics={topics}
				isFavPhotoExist={isFavPhotoExist}
			/>
			<PhotoList
				photos={photos}
				favouritePhotos={favouritePhotos}
				updateFavourites={updateFavourites}
				openModal={openModal}
				isModalOpen={isModalOpen}
			/>
		</div>
	);
};

export default HomeRoute;
