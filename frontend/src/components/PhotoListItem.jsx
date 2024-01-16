import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { id, location, imageSource, username, profile } = props;

  return (
    <article key={id} className="PhotoListItem">
      <h1>in phot list item</h1>
      <img
        src={imageSource}
        alt={`Photo ${id}`}
      />
      <div className="user-info">
        <img
          src={profile}
          alt={`Photo ${username}`}
        />
        <p>{username}</p>
        <p>
          {location.city}{" "}
          {location.country}
        </p>
      </div>
    </article>
  );
};

export default PhotoListItem;
