import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RecipeCard from "./recipe-card";

const SearchResult = ({ searchText }) => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			const res = await axios(
				`https://dummyjson.com/recipes/search?q=${searchText}`
			);
			const data = res.data.recipes;
			setRecipes(data);
		};

		fetchRecipes();
	}, [searchText]);

	return (
		<Container className="my-4">
			<p>
				<em>{recipes.length} recipes found</em>
			</p>

			<Row xs={1} sm={2} md={3} lg={4} className="g-4">
				{recipes.map((item) => (
					<Col key={item.id}>
						<RecipeCard name={item.name} image={item.image} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default SearchResult;