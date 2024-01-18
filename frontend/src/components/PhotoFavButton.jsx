import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ id, isFavourite, toggleFavourite, onClick }) {
	console.log("!!!!!! PHOTO FAV BUTTON !!!!!! ");

	console.log("---------------------------------------------------");
	console.log("   id contents:", id);
	console.log("   Is passed id an Array?", Array.isArray(id));
	console.log("   id is TYPE OF:", typeof id);

	console.log("   onClick contents:", onClick);
	console.log("   onClick passed id an Array?", Array.isArray(onClick));
	console.log("   onClick is TYPE OF:", typeof onClick);

	console.log("   isFavourite contents:", isFavourite);
	console.log("   Is passed isFavourite an Array?", Array.isArray(isFavourite));
	console.log("   isFavourite is TYPE OF:", typeof isFavourite);

	console.log("   toggleFavourite contents:", toggleFavourite);
	console.log(
		"   Is passed toggleFavourite an Array?",
		Array.isArray(toggleFavourite)
	);
	console.log("   toggleFavourite is TYPE OF:", typeof toggleFavourite);

	const [selected, setSelected] = useState(false);
	console.log("original selected value", selected);

	const handleToggle = () => {
		console.log("!!!!!handleToggle selected!!!!!", selected);
		setSelected(!selected);

		if (onClick) {
			console.log("!!!!!!!!!!!");
			onClick(!selected);
		}
	};

	//		photoId = { id };
	//		isFavourite = { isFavourite };
	//		toggleFavourite = { toggleFavourite };

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
