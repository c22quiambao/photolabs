import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
	photo,
	closeModal,
	openModal,
	toggleFavourite,
	toggleFavBadge,
	favouritePhotos,
	isModalOpen,
	updateModal,
	isFavourite,
}) => {
	//const [modalState, setModalState] = useState(false);

	//const openModal = () => {
	//	setModalState(true);
	//};
	///const closeModal = () => {
	//	setModalState(false);
	//};

	console.log("closeModal", closeModal);
	console.log("closeModal", typeof closeModal);
	console.log("received photo", photo);
	const { id, location, urls, user, similar_photos } = photo;
	//const { similarPhotos } = similar_photos;
	console.log("SIMILAR PHOTOS : ------------->", similar_photos);
	console.log("   similar_photos is TYPE OF :", typeof similar_photos);
	console.log(
		"   Is similar_photos photos an Array?",
		Array.isArray(similar_photos)
	);
	const photoArray = Object.values(similar_photos);
	console.log("photoArray : ------------->", photoArray);
	console.log("   photoArray is TYPE OF :", typeof photoArray);
	console.log("   Is photoArray an Array?", Array.isArray(photoArray));

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
			<div>
				<PhotoFavButton
					photoId={id}
					isFavourite={isFavourite}
					toggleFavourite={toggleFavourite}
					toggleFavBadge={toggleFavBadge}
				/>
			</div>
			<div className="photo-details-modal__top-bar">
				<img
					src={urls.full}
					alt={`Photo ${id}`}
					className="photo-details-modal__image"
				/>
			</div>
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

			<br />

			<div className="photo-details-modal__images">
				<span className="photo-details-modal__header"> Similar Photos </span>

				<PhotoList
					photos={photoArray}
					favouritePhotos={favouritePhotos}
					toggleFavourite={toggleFavourite}
					toggleFavBadge={toggleFavBadge}
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
