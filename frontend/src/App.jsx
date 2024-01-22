//code for App.jsx
import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute.jsx";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData.js";

// Note: Rendering a single component to build components in isolation
const App = () => {
	console.log("App");
	const { state, actions } = useApplicationData();
	const { topicData, photoData, favouritePhotos, isModalOpen, selectedPhoto } =
		state;
	const { updateFavourites, openModal, closeModal, setSelectedTopic } = actions;

	console.log("topics received :", topicData);
	console.log("photos", photoData);
	console.log("favouritePhotos------>", favouritePhotos);
	console.log("isModalOpen", isModalOpen);
	console.log("selectedPhoto", selectedPhoto);
	console.log(setSelectedTopic);

	////////
	///* JSX return
	///////
	return (
		<div className="App">
			<HomeRoute
				topics={topicData}
				photos={photoData}
				favouritePhotos={favouritePhotos}
				isFavPhotoExist={!!favouritePhotos.length}
				updateFavourites={updateFavourites}
				openModal={openModal}
				isModalOpen={isModalOpen}
				setSelectedTopic={setSelectedTopic}
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
