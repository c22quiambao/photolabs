import React, { useState } from "react";

//import PhotoListItem from "./components/PhotoListItem";
import PhotoList from "components/PhotoList";
import "./App.scss";
import TopNavigation from "components/TopNavigationBar";

// Note: Rendering a single component to build components in isolation
const App = () => {
	//const [selectedItems, setSelectedItems] = useState([]);

	/*const handleToggleFavorite = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };*/

	/*const sampleDataForPhotoListItem = {
		id: "1",
		location: {
			city: "Montreal",
			country: "Canada",
		},
		imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
		username: "Joe Example",
		profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
	};*/

	//const photos = new Array(3).fill(sampleDataForPhotoListItem);

	return (
		<div className="App">
			{/*{photos.map((element) => {
				console.log("element being read", element);
				return (
					<PhotoListItem
						key={element.id}
						{...element}
					/>
				);
			})}*/}
			{/* solution of LHL
      { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) }
			 //*/}
			<TopNavigation />
			<PhotoList />
		</div>
	);
};

export default App;
