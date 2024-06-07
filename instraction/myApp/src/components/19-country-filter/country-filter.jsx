import React, { useEffect, useState } from "react";
import { Card, Container, FormControl } from "react-bootstrap";

import data from "./countries.json";

const CountryFilter = () => {
	const [searchText, setSearchText] = useState("");
	const [countries, setCountries] = useState(data);

	useEffect(() => {
		const arr = data.filter((item) =>
			item.name
				.toLocaleLowerCase()
				.includes(searchText.toLocaleLowerCase())
		);
		setCountries(arr);
	}, [searchText]);

	console.log(countries);

	return (
		<Container className="mt-4">
			<FormControl
				placeholder="Type country name..."
				type="search"
				onChange={(e) => setSearchText(e.target.value)}
			/>

			<Card>
				<Card.Body>
					{countries.map((item) => (
						<div key={item.code} className="my-1">
							{item.name}
						</div>
					))}
				</Card.Body>
			</Card>
		</Container>
	);
};

export default CountryFilter;