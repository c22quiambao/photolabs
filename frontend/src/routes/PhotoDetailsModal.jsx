import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
	photo,
	closeModal,
	openModal,
	favouritePhotos,
	isModalOpen,
	updateModal,
	updateFavourites,
	isFavourite,
	//isFavourite,
	//toggleFavourite,
	//toggleFavBadge,
	selectedPhotoId,
	selectedPhotoUrls,
	selectedPhotoUser,
	selectedPhotoLoc,
	selectedSimilarPhotos,
}) => {
	//const [modalState, setModalState] = useState(false);

	//const openModal = () => {
	//	setModalState(true);
	//};
	///const closeModal = () => {
	//	setModalState(false);
	//};

	//console.log("closeModal", closeModal);
	//console.log("closeModal", typeof closeModal);
	console.log("received photo", photo);
	console.log(
		"PHOTODETAILSMODAL   Received photo as an Array?",
		Array.isArray(photo)
	);
	console.log(" PHOTODETAILSMODAL isFavourite is ", isFavourite);
	const { id, location, urls, user, similar_photos } = photo;
	//const { similarPhotos } = similar_photos;
	//console.log("SIMILAR PHOTOS : ------------->", similar_photos);
	//console.log("   similar_photos is TYPE OF :", typeof similar_photos);
	//console.log(
	//	"   Is similar_photos photos an Array?",
	//	Array.isArray(similar_photos)
	//);
	const photoArray = Object.values(similar_photos);
	//console.log("photoArray : ------------->", photoArray);
	//console.log("   photoArray is TYPE OF :", typeof photoArray);
	//console.log("   Is photoArray an Array?", Array.isArray(photoArray));
	console.log("checking each single item passed");
	console.log("selectedPhotoId :", selectedPhotoId);
	console.log("selectedPhotoUrls :", selectedPhotoUrls);
	console.log("selectedPhotoUser:", selectedPhotoUser);
	console.log("selectedPhotoLoc :", selectedPhotoLoc);
	console.log("selectedPhotoLoc:", selectedSimilarPhotos);

	return (
		<div
			className="photo-details-modal"
			key={id}
		>
			<button
				className="photo-details-modal__close-button"
				onClick={closeModal}
			>
				<img
					src={closeSymbol}
					alt="close symbol"
				/>
			</button>

			<div className="photo-details-modal__images">
				<PhotoFavButton
					photoId={id}
					isFavourite={isFavourite}
					updateFavourites={updateFavourites}
					//toggleFavourite={toggleFavourite}
					//toggleFavBadge={toggleFavBadge}
				/>
					<img
						src={urls.full}
						alt={`Photo ${id}`}
						className="photo-details-modal__image"
					/>

				<div className="photo-details-modal__photographer-details">
					<img
						src={user.profile}
						alt={`Photo ${user.username}`}
						className="photo-details-modal__photographer-profile"
					/>

					<div className="photo-details-modal__photographer-info">
						<div>{user.username}</div>

						<div className="photo-details-modal__photographer-location">
							{location.city} {location.country}
						</div>
					</div>
				</div>
					<div className="photo-details-modal__header"> Similar Photos </div>
					<PhotoList
						photos={photoArray}
						favouritePhotos={favouritePhotos}
						updateFavourites={updateFavourites}
						//toggleFavourite={toggleFavourite}
						//toggleFavBadge={toggleFavBadge}
						openModal={openModal}
						closeModal={closeModal}
						isModalOpen={isModalOpen}
						updateModal={updateModal}
					/>
			</div>
		</div>
	);
};

export default PhotoDetailsModal;
