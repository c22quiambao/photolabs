// hooks/useApplicationData.js
import { useState } from "react";
import topics from "mocks/topics";
import photos from "mocks/photos";

const useApplicationData = () => {

	// Initial state
	console.log("readuseApplicationData");
	//const [topics, setTopics] = useState(topics);
	//const [photos, setPhotos] = useState(photos);
	const [favouritePhotos, setFavouritePhotos] = useState([]);
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedPhoto, setSelectedPhoto] = useState([]);

	// Action to update favourite photos
	const updateFavourites = (photoId) => {
		setFavouritePhotos((prevFavourites) => {
			const isAlreadyFavourite = prevFavourites.includes(photoId);

			const newFavourites = isAlreadyFavourite
				? prevFavourites.filter((id) => id !== photoId)
				: [...prevFavourites, photoId];
			return newFavourites;
		});
	};

	// Action to handle photo selection
	const openModal = (photo) => {
		setModalOpen(true);
		setSelectedPhoto(photo);
	};

	// Action to close the photo details modal
	const closeModal = () => {
		setModalOpen(false);
		setSelectedPhoto([]);
	};

	// Log the contents to the console
	console.log("useApplicationData Data being passed:", {
		topics,
		photos,
		favouritePhotos,
		isModalOpen,
		selectedPhoto,
	});

	// Return the state and actions as an object
	return {
		state: {
			topics,
			photos,
			favouritePhotos,
			isModalOpen,
			selectedPhoto,
		},
		actions: {
			updateFavourites,
			openModal,
			closeModal,
		},
	};
};

export default useApplicationData;
