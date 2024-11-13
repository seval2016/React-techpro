import React from "react";
import { Card } from "react-bootstrap";

const RecipeCard = ({ image, name }) => {
	return (
		<Card className="h-100">
			<Card.Img src={image} alt={name} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
			</Card.Body>
		</Card>
	);
};

export default RecipeCard;