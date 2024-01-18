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
	//console.log("---------------------------------------------------");
	//console.log("TYPE OF topics:", typeof topics);
	//console.log("Is Array?", Array.isArray(topics));
	//console.log("Topics:", topics);
	//console.log("TYPE OF photos:", typeof photos);
	//console.log("Is Array?", Array.isArray(photos));
	//console.log("photos:", photos);
	//Handle modal
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div className="App">
			<HomeRoute
				topics={topics}
				photos={photos}
				openModal={openModal}
				closeModal={closeModal}
			/>
			{isModalOpen && <PhotoDetailsModal closeModal={closeModal} />}
		</div>
	);
};

export default App;
