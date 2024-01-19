import React, { useState } from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist }) => {
	console.log("!!!!!! FAV BADGE !!!!!! ");
	//console.log("---------------------------------------------------");
	console.log(
		">>>>>>>>>>>>>>>> isFavPhotoExist data receieved",
		isFavPhotoExist
	);
	console.log("   isFavPhotoExist is TYPE OF :", typeof isFavPhotoExist);
	//console.log("selected", selected);
	//console.log("   selected is TYPE OF :", typeof selected);



	return (
		<div className="fav-badge">
			<FavIcon
				displayAlert={isFavPhotoExist}
				selected={isFavPhotoExist}
			/>
		</div>
	);
};

export default FavBadge;
