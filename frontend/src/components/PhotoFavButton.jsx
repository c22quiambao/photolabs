import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import useApplicationData from "../hooks/useApplicationData.js";

function PhotoFavButton({ photoId, isFavourite, updateFavourites }) {
	const handleToggle = () => {
		updateFavourites(photoId);
	};

	return (
		<div
			className="photo-list__fav-icon"
			onClick={handleToggle}
		>
			<div className="photo-list__fav-icon-svg">
				<FavIcon selected={isFavourite} />
			</div>
		</div>
	);
}

export default PhotoFavButton;
