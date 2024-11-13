import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { TfiMinus, TfiPlus, TfiReload } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { up,down,reset,set} from "../store/slices/counter-slice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();



  return (
    <ButtonGroup aria-label="Basic example" className="my-4" size="lg">
      <Button variant="secondary" onClick={()=>dispatch(down())}>
        <TfiMinus />
      </Button>
      <Button variant="secondary" disabled>
        {counter}
      </Button>
      <Button variant="secondary" onClick={()=>dispatch(up())}>
        <TfiPlus />
      </Button>
      <Button variant="secondary"onClick={()=>dispatch(reset())}>
        <TfiReload />
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
