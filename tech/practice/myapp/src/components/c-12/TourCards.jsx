import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const TourCards = ({ id, name, info, image, price, removeById }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <Card style={{ width: "20rem" }} className="bg-dark text-white m-3 ">
        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title className="fs-5">{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{readMore ? info: `${info.substring(0, 200)}...`}</Card.Text>

          <div className="buttons">
            <Button className="me-2"
              variant="primary"
              onClick={() => setReadMore((prev) => !prev)}
            >
              {readMore ? "Show Less" : "Read More"}
            </Button>
            <Button variant="danger" onClick={() => removeById(id)}>
              Not Interested
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TourCards;
