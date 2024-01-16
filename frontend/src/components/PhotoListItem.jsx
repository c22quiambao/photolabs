import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
	/* Insert React */
	console.log("props", props);
	const { id, location, urls, user } = props;

	return (
		<article
			key={id}
			className="photo-list__item "
		>
			<div>
				<PhotoFavButton />
				<img
					src={urls.regular}
					alt={`Photo ${id}`}
					className="photo-list__image"
				/>
			</div>
			<div className="photo-list__user-details">
				{" "}
				<img
					src={user.profile}
					alt={`Photo ${user.username}`}
					className="photo-list__user-profile"
				/>
			</div>
			<div className="photo-list__user-info">{user.username}</div>
			<div className="photo-list__user-location">
				{location.city} {location.country}
			</div>
		</article>
	);
};

export default PhotoListItem;
