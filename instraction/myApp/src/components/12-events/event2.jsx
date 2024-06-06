import React from "react";
import { Button, Container } from "react-bootstrap";

const Event2 = () => {
	const handleClick = (name) => {
		alert(`Hello ${name}`);
	};


	return (
		<Container className="mt-5">
			<Button variant="info" onClick={() => handleClick("John")}>
				Say Hello
			</Button>
		</Container>
	);
};

export default Event2;