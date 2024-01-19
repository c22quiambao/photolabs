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
	console.log("Read PhotoList");
	console.log("photo", photos);
	console.log("favouritePhotos------>", favouritePhotos);
	console.log("isModalOpen", isModalOpen);
	//console.log("selectedPhoto", selectedPhoto);
	return (
		<ul className="photo-list">
			{photos.map((photo) => {
				//console.log("   photo element of array photos being read", photo);

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
