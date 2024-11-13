import React from "react";
import data from "./data.jsx";
import { Card, Button, Container } from "react-bootstrap";
import { useState } from "react";
import "./sairler.scss";

const Sairler = () => {
  const [index, setIndex] = useState(0);
  //var olan datayı descroction yap
  const { id, isim, tarih, resim, metin } = data[index];

  const next = (nxt) => {
    if (nxt > data.length - 1) nxt = 0;
    setIndex(nxt);
  };

  const previous = (prev) => {
    if (prev < 0) prev = data.length - 1;
    setIndex(prev);
  };

  const random = () => {
    let rnd = Math.floor(Math.random() * data.length);
    setIndex(rnd);
  };

  return (
    <Container>
      <Card style={{ width: "20rem", margin: "5rem auto" }} className="cards">
        <Card.Img variant="top" src={resim} />
        <Card.Body>

          <Card.Title>{isim}</Card.Title>
          <Card.Subtitle>{tarih}</Card.Subtitle>

          <Card.Text>{metin}</Card.Text>
          <div className="buttons d-flex justify-content-center mt-5">
            <Button
              className="me-2 btn-sm"
              onClick={() => previous(index-1)}
              variant="primary"
            >
              Prev
            </Button>
            <Button
              className="me-2 btn-sm"
              onClick={() => random()}
              variant="warning"
            >
              Random
            </Button>
            <Button
              className="me-2 btn-sm"
              onClick={() => next(index+1)}
              variant="danger"
            >
              Next
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Sairler;
