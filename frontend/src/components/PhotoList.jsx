import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
	photos,
	favouritePhotos,
	updateFavourites,
	openModal,
	closeModal,
	isModalOpen,
	updateModal,
	// selected,
	//toggleHeartNotif,
}) => {
	console.log("!!!!!! PHOTOLIST  !!!!!! ");
	console.log("---------------------------------------------------");

	console.log("   PhotoListItem photos contents:", photos);
	console.log(
		"   PhotoListItem Is passed photos an Array?",
		Array.isArray(photos)
	);
	//console.log("   photos is TYPE OF:", typeof photos);

	//console.log("   favouritePhotos contents:", favouritePhotos);
	//console.log(
	//	"   Is passed favouritePhotos an Array?",
	//	Array.isArray(favouritePhotos)
	//);
	//console.log("   favouritePhotos is TYPE OF:", typeof favouritePhotos);

	//console.log("   toggleFavourite contents:", toggleFavourite);
	//console.log(
	//	"   Is passed toggleFavourite an Array?",
	//	Array.isArray(toggleFavourite)
	//);
	//console.log("   favouritePhotos is TYPE OF:", typeof toggleFavourite);

	//console.log(
	//	"   Is passed toggleFavBadge an Array?",
	//Array.isArray(toggleFavBadge);
	//);
	//console.log("   toggleFavBadge is TYPE OF:", typeof toggleFavBadge);
	//console.log("openModal", openModal);
	//console.log("openModal is a ", typeof openModal);
	//console.log("closeModal", closeModal);
	//console.log("closeModal  is a ", typeof closeModal);
	//console.log("updateModal", updateModal);
	//console.log("updateModal  is a ", typeof updateModal);
	//console.log(">>>>>>>>>>>>>>>> isModalOpen", isModalOpen);
	//console.log(">>>>>>>>>>>>>>>> isModalOpen  is a ", typeof isModalOpen);

	return (
		<ul className={isModalOpen ? "photo-details-modal__top-bar" : "photo-list"}>
			{photos.map((photo) => {
				//console.log("   photo element of array photos being read", photo);

				return (
					<PhotoListItem
						key={photo.id}
						photo={photo}
						isFavourite={favouritePhotos.includes(photo.id)}
						updateFavourites={updateFavourites}
						openModal={openModal}
						closeModal={closeModal}
						isModalOpen={isModalOpen}
						updateModal={updateModal}
						//toggleHeartNotif={toggleHeartNotif}
					/>
				);
			})}
		</ul>
	);
};

export default PhotoList;
