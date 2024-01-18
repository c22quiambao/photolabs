import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({
	photoId,
	isFavourite,
	toggleFavourite,
	toggleFavBadge,
}) {
	console.log("!!!!!! PHOTO FAV BUTTON !!!!!! ");

	console.log("---------------------------------------------------");
	console.log("   photoId contents:", photoId);
	console.log("   Is passed id an Array?", Array.isArray(photoId));
	console.log("   id is TYPE OF:", typeof photoId);

	console.log("   isFavourite contents:", isFavourite);
	console.log("   Is passed isFavourite an Array?", Array.isArray(isFavourite));
	console.log("   isFavourite is TYPE OF:", typeof isFavourite);

	//console.log("   toggleFavourite contents:", toggleFavourite);
	console.log(
		"   Is passed toggleFavourite an Array?",
		Array.isArray(toggleFavourite)
	);
	console.log("   toggleFavourite is TYPE OF:", typeof toggleFavourite);

	console.log(
		"   Is passed toggleFavBadge an Array?",
		Array.isArray(toggleFavBadge)
	);
	console.log("   toggleFavBadge is TYPE OF:", typeof toggleFavBadge);

	const [selected, setSelected] = useState(isFavourite);
	//console.log("original selected value", selected);

	const handleToggle = () => {
		//console.log("!!!!!handleToggle selected!!!!!", selected);
		setSelected(!selected);
		toggleFavourite(photoId);
		toggleFavBadge();
	};

	return (
		<div
			className="photo-list__fav-icon"
			onClick={handleToggle}
		>
			<div className="photo-list__fav-icon-svg">
				<FavIcon
					selected={selected}
					displayAlert={""}
				/>
			</div>
		</div>
	);
}

export default PhotoFavButton;
