import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({
	photoId,
	isFavourite,
	updateFavourites,
	//toggleHeartNotif,
}) {
	console.log("!!!!!! PHOTO FAV BUTTON !!!!!! ");
	console.log("---------------------------------------------------");
	//console.log("   photoId contents:", photoId);
	//console.log("   Is passed id an Array?", Array.isArray(photoId));
	//console.log("   id is TYPE OF:", typeof photoId);
	//console.log("   isFavourite contents:", isFavourite);
	//console.log("   Is passed isFavourite an Array?", Array.isArray(isFavourite));
	//console.log("   isFavourite is TYPE OF:", typeof isFavourite);

	//console.log("   toggleFavourite contents:", toggleFavourite);
	// console.log(
	// 	"   Is passed toggleFavourite an Array?",
	// 	Array.isArray(updateFavourites)
	// );
	// console.log("   toggleFavourite is TYPE OF:", typeof updateFavourites);

	// console.log(
	// 	"   Is passed toggleFavBadge an Array?",
	// 	Array.isArray(toggleHeartNotif)
	// );
	// console.log("   toggleFavBadge is TYPE OF:", typeof toggleHeartNotif);

	//state handler of photo's heart state
	//const [selected, setSelected] = useState(isFavourite);
	//console.log("original selected value", selected);

	// handles what happens when heart icon is clicked on photo
	const handleToggle = () => {
		//updates list of favourites
		updateFavourites(photoId);
		//updates global heart notif
		//toggleHeartNotif();
		//changes photo's heart state
		//setSelected(!selected);
	};

	return (
		<div
			className="photo-list__fav-icon"
			onClick={handleToggle}
		>
			<div className="photo-list__fav-icon-svg">
				<FavIcon
					selected={isFavourite}
				/>
			</div>
		</div>
	);
}

export default PhotoFavButton;
