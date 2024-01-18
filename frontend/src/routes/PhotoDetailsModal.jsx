import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ photo, closeModal }) => {
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
  const { similarPhotos } = similar_photos;
  console.log(similar_photos);
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

			<article>
				<div>
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
			</article>
			<br />
			<span className="photo-details-modal__header"> Similar Photos </span>
			<div className="photo-details-modal__top-bar">
				{Object.values(similar_photos).map((photos) => (
					<div key={item.id}>
						<PhotoList
							photos={photos}
							favouritePhotos={favouritePhotos}
							toggleFavourite={toggleFavourite}
							toggleFavBadge={toggleFavBadge}
							openModal={openModal}
							closeModal={closeModal}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default PhotoDetailsModal;
