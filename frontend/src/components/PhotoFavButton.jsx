import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({onClick}) {
  const [selected,setSelected] = useState(false);

  const handleToggle = () =>{
    setSelected(!selected);

    if(onClick){
      onClick(!selected);
    }
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleToggle}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;