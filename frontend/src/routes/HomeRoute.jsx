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
	setSelectedTopic,
}) => {
	return (
		<div className="home-route">
			<TopNavigation
				topics={topics}
				isFavPhotoExist={isFavPhotoExist}
				setSelectedTopic={setSelectedTopic}
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
