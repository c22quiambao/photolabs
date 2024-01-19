//code for App.jsx
import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute.jsx";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
const App = () => {
	////////
	// State handling of Fave Photos list if there is any that is liked
	////////
	const [favouritePhotos, setFavouritePhotos] = useState([]);

	////////
	///* Handles favourite photos globally
	////////
	const updateFavourites = (photoId) => {
		setFavouritePhotos((prevFavourites) => {
			const isAlreadyFavourite = prevFavourites.includes(photoId);

			const newFavourites = isAlreadyFavourite
				? prevFavourites.filter((id) => id !== photoId)
				: [...prevFavourites, photoId];

			return newFavourites;
		});
	};

	////////
	///* Handles STATE of modal & selected photo array?/ Object?
	///////
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedPhoto, setSelectedPhoto] = useState([]);

	const openModal = (photo) => {
		setModalOpen(true);
		setSelectedPhoto(photo);
	};

	const closeModal = () => {
		setModalOpen(false);
		setSelectedPhoto([]);
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
				isModalOpen={isModalOpen}
			/>
			{isModalOpen && (
				<PhotoDetailsModal
					isModalOpen={isModalOpen}
					photo={selectedPhoto}
					closeModal={closeModal}
					openModal={openModal}
					favouritePhotos={favouritePhotos}
					isFavourite={!!favouritePhotos.includes(selectedPhoto.id)}
					updateFavourites={updateFavourites}
				/>
			)}
		</div>
	);
};

export default App;
