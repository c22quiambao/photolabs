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
}) => {
	const { id, location, urls, user, similar_photos } = photo;

	const photoArray = Object.values(similar_photos);

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
					openModal={openModal}
					isModalOpen={isModalOpen}
					updateModal={updateModal}
				/>
			</div>
		</div>
	);
};

export default PhotoDetailsModal;
