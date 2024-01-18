import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist,selected }) => {
	console.log("!!!!!! FAV BADGE !!!!!! ");
	//console.log("---------------------------------------------------");
	console.log("isFavPhotoExist", isFavPhotoExist);
	console.log("   isFavPhotoExist is TYPE OF :", typeof isFavPhotoExist);
	console.log("selected", selected);
	console.log("   selected is TYPE OF :", typeof selected);


	return (
		<div className="fav-badge">
			<FavIcon
				displayAlert={!!isFavPhotoExist}
				selected={selected}
			/>
		</div>
	);
};

export default FavBadge;