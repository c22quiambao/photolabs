//code for App.jsx
import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute.jsx";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
const App = () => {
	console.log("!AAAAAAAAAPPPPPPPPPP!");
	//console.log("---------------------------------------------------");
	console.log("   photos contents:", photos);
	//console.log("   Is passed photos an Array?", Array.isArray(photos));
	//console.log("   photos is TYPE OF :", typeof photos);

	//console.log("   favouritePhotos is a TYPE OF :", typeof favouritePhotos);

	//console.log(
	//	"   setFavouritePhotos is a TYPE OF :",
	//	typeof setFavouritePhotos
	//);

	////////
	// State handling of Fave Photos list if there is any that is liked
	////////
	const [favouritePhotos, setFavouritePhotos] = useState([]);
	console.log("   favouritePhotos contents : ", favouritePhotos);
	console.log(
		"   Is favouritePhotos an Array?",
		Array.isArray(favouritePhotos)
	);
	////////
	///* Handles favourite photos globally
	////////
	const updateFavourites = (photoId) => {
		console.log("called updateFavourites ");
		setFavouritePhotos((prevFavourites) => {
			const isAlreadyFavourite = prevFavourites.includes(photoId);

			const newFavourites = isAlreadyFavourite
				? prevFavourites.filter((id) => id !== photoId)
				: [...prevFavourites, photoId];

			console.log("Previous Favourites:", prevFavourites);
			console.log("Toggling Photo ID:", photoId);
			console.log("Is Already Favourite:", isAlreadyFavourite);
			console.log("New Favourites:", newFavourites);

			return newFavourites;
		});
	};

	////////
	///* Handles STATE of FavBadge if there is a photo liked/disliked
	///////
	//const [isFavPhotoExist, setIsFavPhotoExist] = useState(
	//	favouritePhotos.count > 0);
	//		console.log("Initial value of isFavPhotoExist", isFavPhotoExist);
	//// DO I NEED THIS?????
	//const [hasNewFaves, setHasNewFaves] = useState(null);

	////////
	///* Handles favourite photos globally
	///////
	//const toggleHeartNotif = () => {
	//			console.log("called toggleHeartNotif ");
	//	console.log("isFavPhotoExist", isFavPhotoExist);
	//	//checkif favouritephotos is <= 0
	//	if (favouritePhotos > 0) {
	//		setIsFavPhotoExist(true);
	//				console.log("isFavPhotoExist", isFavPhotoExist);
	//		setHasNewFaves(true);
	//	} else {
	//		setIsFavPhotoExist(false);
	//				console.log("isFavPhotoExist", isFavPhotoExist);
	//					setHasNewFaves(false);
	//	};

	//	};

	////////
	///* Handles STATE of modal & selected photo array?/ Object?
	///////
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedPhoto, setSelectedPhoto] = useState([]);
	console.log("selectedPhoto is WHAAAAAT!!!!!!", selectedPhoto);
	console.log("   Is passed photos an Array?", Array.isArray(selectedPhoto));

	const openModal = (photo) => {
		console.log("&^(*&^%(*&%(*^&% photo data receieved", photo);
		console.log(
			"OPEN MODAL   Is passed photos an Array?",
			Array.isArray(photo)
		);
		setModalOpen(true);
		setSelectedPhoto(photo);
	};

	const closeModal = () => {
		setModalOpen(false);
		setSelectedPhoto([]);
	};

	const updateModal = (photo) => {
		console.log("&^(*&^%(*&%(*^&% photo data receieved", photo);
		console.log(
			"UPDATE MODAL   Is passed photo an Array?",
			Array.isArray(photo)
		);
		setModalOpen(false);
		openModal(photo);
		//setSelectedPhoto(null);
		//setSelectedPhoto(photo);
		//console.log("----------------", selectedPhoto);
		//setSelectedPhoto(photo);
	};

	////////
	///* JSX return
	///////
	return (
		<div className="App">
			<HomeRoute
				topics={topics}
				photos={photos}
				favouritePhotos={favouritePhotos}
				isFavPhotoExist={!!favouritePhotos.length}
				updateFavourites={updateFavourites}
				openModal={openModal}
				closeModal={closeModal}
				updateModal={updateModal}
				isModalOpen={isModalOpen}
				//selected={hasNewFaves}
				//toggleHeartNotif={toggleHeartNotif}
			/>
			{isModalOpen && (
				<PhotoDetailsModal
					isModalOpen={isModalOpen}
					photo={selectedPhoto}
					closeModal={closeModal}
					openModal={openModal}
					favouritePhotos={favouritePhotos}
					isFavourite={!!favouritePhotos.includes(selectedPhoto.id)}
					updateModal={updateModal}
					updateFavourites={updateFavourites}
					selectedPhotoId={selectedPhoto.id}
					selectedPhotoUrls={selectedPhoto.urls}
					selectedPhotoUser={selectedPhoto.user}
					selectedPhotoLoc={selectedPhoto.location}
					selectedSimilarPhotos={selectedPhoto.similarPhotos}
					//isFavourite={favouritePhotos.includes(photos.id)}
					//toggleFavourite={toggleFavourite}
					//toggleFavBadge={toggleFavBadge}
				/>
			)}
		</div>
	);
};

export default App;
