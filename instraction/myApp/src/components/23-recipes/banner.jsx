import React from "react";
import "./banner.scss";
import { FormControl } from "react-bootstrap";

const Banner = ({ setSearchText }) => {
	return (
		<div className="recipe-banner">
			<h1>Turkish Cusine</h1>
			<FormControl
				type="search"
				onChange={(e) => setSearchText(e.target.value)}
			/>
		</div>
	);
};

export default Banner;