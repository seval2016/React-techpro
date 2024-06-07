import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { TfiPlus, TfiMinus } from "react-icons/tfi";
import Card from "react-bootstrap/Card";
import "./progress.scss";
import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = () => {
  const [counter, setCounter] = useState(0);

  const counterDown = () => {
    if (counter <= 0) return;
    setCounter((prev) => prev - 10);
  };

  const counterUp = () => {
    if (counter >= 100) return; // Adjusted limit from 10 to 100
    setCounter((prev) => prev + 10);
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <ButtonGroup aria-label="Basic example">
            <Button variant="info" onClick={counterDown}>
              <TfiMinus />
            </Button>
            <Button variant="danger" onClick={counterUp}>
              <TfiPlus />
            </Button>
          </ButtonGroup>
          <div className="my-3">
            <ProgressBar className="fs-6" striped variant="warning" now={counter} label={`${counter}%`} />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Progress;
