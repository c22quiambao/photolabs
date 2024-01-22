import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
	photos,
	favouritePhotos,
	updateFavourites,
	openModal,
	isModalOpen,
}) => {
	return (
		<ul className="photo-list">
			{photos.map((photo) => {
				return (
					<PhotoListItem
						key={photo.id}
						photo={photo}
						isFavourite={favouritePhotos.includes(photo.id)}
						updateFavourites={updateFavourites}
						openModal={openModal}
						isModalOpen={isModalOpen}
					/>
				);
			})}
		</ul>
	);
};

export default PhotoList;
