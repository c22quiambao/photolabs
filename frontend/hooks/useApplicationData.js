// State handling off FAVOURITE PHOTOS
const [favouritePhotos, setFavouritePhotos] = useState([]);

console.log("   HOME ROUTE - favouritePhotos contents : ", favouritePhotos);
console.log("   Is favouritePhotos an Array?", Array.isArray(favouritePhotos));
console.log("   favouritePhotos is a TYPE OF :", typeof favouritePhotos);

console.log("   setFavouritePhotos is a TYPE OF :", typeof setFavouritePhotos);

//TOGGLE HEART ICON  AND RETURNS NEW FAVELIST
// DO I NEED THIS?!!!
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

// State handling FavBadge if there is a photo liked
const [isFavPhotoExist, setIsFavPhotoExist] = useState(favouritePhotos.count);

const [selected, setSelected] = useState(null);

const toggleFavBadge = () => {
	setIsFavPhotoExist(!isFavPhotoExist);
	if (!selected) {
		setSelected(true);
	}
};

// handling of MODAL State
const [isModalOpen, setModalOpen] = useState(false);

// handling of SELECTED DATA
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

// I DONT THINK I NEED THIS
const updateModal = (photo) => {
	setSelectedPhoto(null);
	setSelectedPhoto(photo);
};
