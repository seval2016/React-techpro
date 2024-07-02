import React from 'react'
import { useSelector } from "react-redux";


const SupCounter = () => {
    const counter = useSelector((state) => state.counter.value);
  return (
    <sup>{counter}</sup>
  )
}

export default SupCounter