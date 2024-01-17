//code for App.jsx
import React, { useState } from "react";

//import PhotoListItem from "./components/PhotoListItem";
//import PhotoList from "components/PhotoList";
import "./App.scss";
//import TopNavigation from "components/TopNavigationBar";
import HomeRoute from "routes/HomeRoute.jsx";

// Note: Rendering a single component to build components in isolation
const App = () => {
	return (
		<div className="App">
			<HomeRoute />
		</div>
	);
};

export default App;
