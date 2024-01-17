//code for App.jsx
import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute.jsx";
import topics from "mocks/topics";
import photos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
const App = () => {
	console.log("!AAAAAAAAAPPPPPPPPPP!");
	console.log("TYPE OF topics:", typeof topics);
	console.log("Is Array?", Array.isArray(topics));
	console.log("Topics:", topics);
	console.log("TYPE OF photos:", typeof photos);
	console.log("Is Array?", Array.isArray(photos));
	console.log("photos:", photos);

	return (
		<div className="App">
			<HomeRoute
				topics={topics}
				photos={photos}
			/>
			;
		</div>
	);
};

export default App;
