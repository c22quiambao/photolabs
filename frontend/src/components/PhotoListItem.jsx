import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { id, location, imageSource, username, profile } = props;

  return (
    <article key={id} className="photo-list__item ">
            <div ><img
        src={imageSource}
        alt={`Photo ${id}`}
        className = "photo-list__image"
      />
</div>
      <div className="photo-list__user-details">
        <img
          src={profile}
          alt={`Photo ${username}`}
          className="photo-list__user-profile"
        />
        </div>
        <div className = "photo-list__user-info">{username}</div>
        <div className = "photo-list__user-location">{location.city}{" "}{location.country}</div>

    </article>
  );
};

export default PhotoListItem;
