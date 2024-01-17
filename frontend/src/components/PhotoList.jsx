import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos }) => {
	return (
		<ul className="photo-list">
			{photos.map((photo) => {
				console.log("Photo Item being read", photo);
				return (
					<PhotoListItem
						key={photo.id}
						{...photo}
					/>
				);
			})}
		</ul>
	);
};

export default PhotoList;
