import React from "react";
import { Badge, Card } from "react-bootstrap";
const Product = (props) => {
    const { thumbnail, title, description, price, availabilityStatus } = props;
    return (
        <Card className="h-100">
            <Card.Img src={thumbnail} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Badge className="position-absolute top-0 start-0 m-3 fs-5 text-dark" bg="warning">${price}</Badge>
            <Badge className="position-absolute top-0 end-0 m-3" bg="secondary">{availabilityStatus}</Badge>
        </Card>
    );
};
export default Product;