import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { BsCake2 } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";

const User = (props) => {
	const { id, image, name, age, isCelebrated, celebrateUser } = props;

	return (
		<Card className={`my-3 ${isCelebrated ? "bg-warning-subtle" : ""}`}>
			<Card.Body>
				<Row className="align-items-center">
					<Col xs={3}>
						<Image src={`/img/${image}`} roundedCircle fluid />
					</Col>
					<Col xs={9}>
						<Card.Title>{name}</Card.Title>
						<Card.Subtitle>
							<BsCake2 /> {age}
						</Card.Subtitle>
					</Col>
				</Row>
			</Card.Body>

			<Button
				variant="link"
				className="position-absolute end-0"
				disabled={isCelebrated}
				onClick={() => celebrateUser(id)}
			>
				<MdCelebration />
			</Button>
		</Card>
	);
};

export default User;