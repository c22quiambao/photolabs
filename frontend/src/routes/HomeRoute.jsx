//code for HomeRoute.jsx
import React, { useState } from "react";

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
	closeModal,
	updateModal,
	//selected,
	//toggleHeartNotif,
}) => {
	console.log("!!!!!! HOME ROUTE!!!!!! ");
	console.log(
		">>>>>>>>>>>>>>>> isFavPhotoExist data receieved",
		isFavPhotoExist
	);
	//console.log(">>>>>>>>>>>>>>>> photo data receieved", photo);
		console.log("   photos contents:", photos);
		console.log("   Is passed photos an Array?", Array.isArray(photos));
	return (
		<div className="home-route">
			<TopNavigation
				topics={topics}
				isFavPhotoExist={isFavPhotoExist}
				//selected={selected}
			/>
			<PhotoList
				photos={photos}
				favouritePhotos={favouritePhotos}
				updateFavourites={updateFavourites}
				openModal={openModal}
				closeModal={closeModal}
				updateModal={updateModal}
				isModalOpen={isModalOpen}
				//toggleHeartNotif={toggleHeartNotif}
			/>
		</div>
	);
};

export default HomeRoute;
