//code for App.jsx
import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute.jsx";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/mockphotodata";

// Note: Rendering a single component to build components in isolation
const App = () => {
	console.log("!AAAAAAAAAPPPPPPPPPP!");

	console.log("   photos contents:", photos);
	console.log("   Is passed photos an Array?", Array.isArray(photos));
	console.log("   photos is TYPE OF :", typeof photos);

	// State handling
	const [favouritePhotos, setFavouritePhotos] = useState([]);

	console.log("   HOME ROUTE - favouritePhotos contents : ", favouritePhotos);
	console.log(
		"   Is favouritePhotos an Array?",
		Array.isArray(favouritePhotos)
	);
	console.log("   favouritePhotos is a TYPE OF :", typeof favouritePhotos);

	console.log(
		"   setFavouritePhotos is a TYPE OF :",
		typeof setFavouritePhotos
	);
	//Handles favourite photos globally
	const toggleFavourite = (photoId) => {
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

	//Set state of FavBadge if there is a photo liked
	const [isFavPhotoExist, setIsFavPhotoExist] = useState(favouritePhotos.count);
	const [selected, setSelected] = useState(null);

	const toggleFavBadge = () => {
		setIsFavPhotoExist(!isFavPhotoExist);
		if (!selected) {
			setSelected(true);
		}
	};


	//Handle modal
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedPhoto, setSelectedPhoto] = useState(null);

	const openModal = (photo) => {
		console.log("&^(*&^%(*&%(*^&% photo data receieved", photo);
		setModalOpen(true);
		setSelectedPhoto(photo);
	};

	const closeModal = () => {
		setModalOpen(false);
		setSelectedPhoto(null);
	};

	const updateModal = (photo) => {
		setSelectedPhoto(null);
	setSelectedPhoto(photo);};

	return (
		<div className="App">
			<HomeRoute
				topics={topics}
				photos={photos}
				openModal={openModal}
				closeModal={closeModal}
				favouritePhotos={favouritePhotos}
				selected={selected}
				toggleFavourite={toggleFavourite}
				toggleFavBadge={toggleFavBadge}
				updateModal={updateModal}
			/>
			{isModalOpen && (
				<PhotoDetailsModal
					photo={selectedPhoto}
					closeModal={closeModal}
					openModal={openModal}
					toggleFavourite={toggleFavourite}
					toggleFavBadge={toggleFavBadge}
					favouritePhotos={favouritePhotos}
					isModalOpen={isModalOpen}
					updateModal={updateModal}
					isFavourite={favouritePhotos.includes(photos.id)}
				/>
			)}
		</div>
	);
};

export default App;
