import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favouritePhotos, toggleFavourite }) => {
	console.log("!!!!!! PHOTOLIST  !!!!!! ");
	console.log("---------------------------------------------------");

	console.log("   photos contents:", photos);
	console.log("   Is passed photos an Array?", Array.isArray(photos));
	console.log("   photos is TYPE OF:", typeof photos);

	console.log("   favouritePhotos contents:", favouritePhotos);
	console.log(
		"   Is passed favouritePhotos an Array?",
		Array.isArray(favouritePhotos)
	);
	console.log("   favouritePhotos is TYPE OF:", typeof favouritePhotos);

	console.log("   toggleFavourite contents:", toggleFavourite);
	console.log(
		"   Is passed toggleFavourite an Array?",
		Array.isArray(toggleFavourite)
	);
	console.log("   favouritePhotos is TYPE OF:", typeof toggleFavourite);

	return (
		<ul className="photo-list">
			{photos.map((photo) => {
				console.log("   photo element of array photos being read", photo);
				return (
					<PhotoListItem
						key={photo.id}
						photo={photo}
						isFavourite={favouritePhotos.includes(photo.id)}
						toggleFavourite={toggleFavourite}
					/>
				);
			})}
		</ul>
	);
};

export default PhotoList;
