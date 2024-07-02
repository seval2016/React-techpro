import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { TfiMinus, TfiPlus, TfiReload } from "react-icons/tfi";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);

  return (
    <ButtonGroup aria-label="Basic example" className="my-4" size="lg">
      <Button variant="secondary">
        <TfiMinus />
      </Button>
      <Button variant="secondary" disabled>
        {counter}
      </Button>
      <Button variant="secondary">
        <TfiPlus />
      </Button>
      <Button variant="secondary">
        <TfiReload />
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
