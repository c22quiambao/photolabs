// hooks/useApplicationData.js
import { useReducer } from "react";
import topics from "mocks/topics";
import photos from "mocks/photos";

// set initial State
const initialState = {
	favouritePhotos: [],
	isModalOpen: false,
	selectedPhoto: [],
	topics,
	photos,
};

// set action types
const actionTypes = {
	UPDATE_FAVOURITE_PHOTOS: "UPDATE_FAVOURITE_PHOTOS",
	OPEN_MODAL: "OPEN_MODAL",
	CLOSE_MODAL: "CLOSE_MODAL",
	SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_FAVOURITE_PHOTOS:
			const { favouritePhotos } = state; // Assuming that prevFavouritePhotos is in your state
			const isAlreadyFavourite = favouritePhotos.includes(action.payload);
			const newFavourites = isAlreadyFavourite
				? favouritePhotos.filter((id) => id !== action.payload)
				: [...favouritePhotos, action.payload];

			return {
				...state,
				favouritePhotos: newFavourites,
			};
		case actionTypes.OPEN_MODAL:
			return { ...state, isModalOpen: true };
		case actionTypes.CLOSE_MODAL:
			return {
				...state,
				isModalOpen: false,
				selectedPhoto: null,
				topics: initialState.topics, // Reset topics to initial state
				photos: initialState.photos,
				// Reset photos to initial state
			};
		case actionTypes.SET_SELECTED_PHOTO:
			return { ...state, selectedPhoto: action.payload };
		default:
			return state;
	}
};

const useApplicationData = () => {
	console.log("read useApplicationData");

	const [state, dispatch] = useReducer(reducer, initialState);

	// Action to update favourite photos
	const updateFavourites = (photoId) => {
		dispatch({
			type: actionTypes.UPDATE_FAVOURITE_PHOTOS,
			payload: photoId,
		});
	};

	// Action to handle photo selection
	const openModal = (photo) => {
		//Open modal
		dispatch({
			type: actionTypes.OPEN_MODAL,
		});

		//set selected photo
		dispatch({
			type: actionTypes.SET_SELECTED_PHOTO,
			payload: photo,
		});
	};

	// Action to close the photo details modal
	const closeModal = () => {
		dispatch({ type: actionTypes.CLOSE_MODAL });
	};

	// Initial state
	//const [topics, setTopics] = useState(topics);
	//const [photos, setPhotos] = useState(photos);
	//const [favouritePhotos, setFavouritePhotos] = useState([]);
	//const [isModalOpen, setModalOpen] = useState(false);
	//const [selectedPhoto, setSelectedPhoto] = useState([]);

	// Log the contents to the console
	//console.log("useApplicationData topics", topics);
	//	console.log("useApplicationData photos", photos);
	//		console.log("useApplicationData favouritePhotos", favouritePhotos);
	//			console.log("useApplicationData isModalOpen",isModalOpen);
	//				console.log("useApplicationData selectedPhoto",selectedPhoto);

	// Return the state and actions as an object
	return {
		state,
		actions: {
			updateFavourites,
			openModal,
			closeModal,
		},
	};
};

export default useApplicationData;
