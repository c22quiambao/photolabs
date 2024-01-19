import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
	photo,
	isFavourite,
	updateFavourites,
	openModal,
	isModalOpen,
}) => {
	const { id, location, urls, user, similar_photos } = photo;

	const handleModal = () => {
		if (!isModalOpen) {
			openModal(photo);
		}
	};

	return (
		<div
			key={id}
			className="photo-list__item"
		>
			<div>
				<PhotoFavButton
					photoId={id}
					isFavourite={isFavourite}
					updateFavourites={updateFavourites}
				/>
				<img
					src={urls.regular}
					alt={`Photo ${id}`}
					className="photo-list__image"
					onClick={isModalOpen ? null : handleModal}
				/>
			</div>
			<div className="photo-list__user-details">
				{" "}
				<img
					src={user.profile}
					alt={`Photo ${user.username}`}
					className="photo-list__user-profile"
				/>
			</div>
			<div className="photo-list__user-info">{user.username}</div>
			<div className="photo-list__user-location">
				{location.city} {location.country}
			</div>
		</div>
	);
};

export default PhotoListItem;
