// hooks/useApplicationData.js
import { useReducer, useEffect } from "react";
import topics from "mocks/topics";
import photos from "mocks/photos";

// set initial State
const initialState = {
	favouritePhotos: [],
	isModalOpen: false,
	selectedPhoto: [],
	photoData: [],
	topicData: [],
	photoByTopic: [],
	selectedTopicId: null,
};

// set action types
const actionTypes = {
	UPDATE_FAVOURITE_PHOTOS: "UPDATE_FAVOURITE_PHOTOS",
	OPEN_MODAL: "OPEN_MODAL",
	CLOSE_MODAL: "CLOSE_MODAL",
	SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
	SET_PHOTO_DATA: "SET_PHOTO_DATA",
	SET_TOPIC_DATA: "SET_TOPIC_DATA",
	GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
	SET_SELECTED_TOPIC: "SET_SELECTED_TOPIC",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_PHOTO_DATA:
			return { ...state, photoData: action.payload };

		case actionTypes.SET_TOPIC_DATA:
			return { ...state, topicData: action.payload };

		case actionTypes.GET_PHOTOS_BY_TOPICS:
			return { ...state, photoByTopic: action.payload };

		case actionTypes.SET_SELECTED_TOPIC:
			return { ...state, selectedTopicId: action.payload };

		case actionTypes.UPDATE_FAVOURITE_PHOTOS:
			const { favouritePhotos } = state;
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
				topics: initialState.topicData,
				photos: initialState.photoData,
			};

		case actionTypes.SET_SELECTED_PHOTO:
			return { ...state, selectedPhoto: action.payload };

		default:
			return state;
	}
};

const useApplicationData = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	//useEffect to fetch all photos and topics
	useEffect(() => {
		//fetching photo data
		fetch("/api/photos")
			.then((response) => response.json())
			.then((data) =>
				dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: data })
			)
			.catch((error) => {
				console.error("Error fetching data from /api/photos:", error);
			});

		// Fetch topics data
		fetch("/api/topics")
			.then((response) => response.json())
			.then((topicData) =>
				dispatch({ type: actionTypes.SET_TOPIC_DATA, payload: topicData })
			)
			.catch((error) => {
				console.error("Error fetching data from /api/topics:", error);
			});
	}, []);

	// Fetch photos by topic based on selected topic id
	useEffect(() => {
		if (state.selectedTopicId) {
			fetch(`/api/topics/photos/${state.selectedTopicId}`)
				.then((response) => response.json())
				.then((photoByTopic) =>
					dispatch({
						type: actionTypes.SET_PHOTO_DATA,
						payload: photoByTopic,
					})
				)
				.catch((error) => {
					console.error(
						`Error fetching data from /api/topics/photos/${state.selectedTopicId}`,
						error
					);
				});
		}
	}, [state.selectedTopicId]);

	// Action to update selected topic id
	const setSelectedTopic = function (topicId) {
		dispatch({ type: actionTypes.SET_SELECTED_TOPIC, payload: topicId });
	};

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

	// Return the state and actions as an object
	return {
		state,
		actions: {
			updateFavourites,
			openModal,
			closeModal,
			setSelectedTopic,
		},
	};
};

export default useApplicationData;
