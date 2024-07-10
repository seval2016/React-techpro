import React, { useEffect, useState } from "react";
import data from "../../assets/data/data.json";
import "./tour.scss";
import TourCards from "./TourCards";
import { Container, Row, Col } from "react-bootstrap";

const TourCard = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTours(data);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const removeById = (id) => {
    let newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };

  return (
    <div className="header">
      <h2 className="text-center fs-1 bg-success p-4 text-white">Our Tours</h2>
      <Container className="contex">
        <Row xs={1} md={2} lg={4}>
          {tours.map((item) => (
            <Col key={item.id}>
              <TourCards {...item} removeById={removeById} />{" "}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TourCard;
