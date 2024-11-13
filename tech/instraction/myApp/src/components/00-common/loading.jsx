import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
	return (
		<Container className="my-3 text-center">
			<Spinner size="lg" variant="info" />
		</Container>
	);
};

export default Loading;