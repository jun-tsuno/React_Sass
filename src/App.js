import React from "react";
import "./css/Main.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<MainPage />
		</div>
	);
};

export default App;
