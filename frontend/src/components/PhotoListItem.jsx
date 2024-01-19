import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
	photo,
	isFavourite,
	updateFavourites,
	openModal,
	closeModal,
	updateModal,
	isModalOpen,
	//toggleHeartNotif,
	//selected,
}) => {
	console.log("!!!!!! PHOTO LIST ITEM !!!!!! ");
	console.log("---------------------------------------------------");
	console.log("   photo contents:", photo);
	//console.log("   Is passed photo an Array?", Array.isArray(photo));
	//console.log("   photo is TYPE OF:", typeof photo);

	//console.log("   isFavourite contents:", isFavourite);
	//console.log("   Is passed isFavourite an Array?", Array.isArray(isFavourite));
	//console.log("   isFavourite is TYPE OF:", typeof isFavourite);

	//console.log("   isFavourite contents:", toggleFavourite);
	//console.log(
	//	"   Is passed toggleFavourite an Array?",
	//	Array.isArray(toggleFavourite)
	//);
	//console.log("   toggleFavourite is TYPE OF:", typeof toggleFavourite);

	//console.log(
	//	"   Is passed toggleFavBadge an Array?",
	//	Array.isArray(toggleFavBadge)
	//);
	//console.log("   toggleFavBadge is TYPE OF:", typeof toggleFavBadge);

	//console.log("openModal", openModal);
	//console.log("openModal", typeof openModal);
	//console.log("closeModal", closeModal);
	//console.log("closeModal", typeof closeModal);
	//console.log("updateModal  is a ", typeof updateModal);
	//console.log(">>>>>>>>>>>>>>>> isModalOpen", isModalOpen);
	//console.log(">>>>>>>>>>>>>>>> isModalOpen  is a ", typeof isModalOpen);

	const { id, location, urls, user } = photo;
	//console.log(id);

	const handleModal = () => {
		console.log("PHOTOLISTITEM - contents of photo", photo);
		console.log(
			"PHOTOLISTITEM   Pasing photo as an Array?",
			Array.isArray(photo)
		);
		if (!isModalOpen) {
			openModal(photo);
		} else {
			//closeModal();
			//transfer updatemodal inside of closemodal
			updateModal(photo);
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
					//toggleHeartNotif={toggleHeartNotif}
				/>
				<img
					src={urls.regular}
					alt={`Photo ${id}`}
					className="photo-list__image"
					onClick={handleModal}
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
