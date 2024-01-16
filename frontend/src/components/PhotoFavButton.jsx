import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ onClick }) {
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

	return (
		<div
			className="photo-list__fav-icon"
			onClick={handleToggle}
		>
			<div className="photo-list__fav-icon-svg">
				{/* Insert React */}
				<FavIcon selected={selected} />
			</div>
		</div>
	);
}

export default PhotoFavButton;
