import React from "react";

export const CalculatorResult = (props) => {
  const weightInGrams = 1000 / props.inputWeight;
  const result = 50 / weightInGrams;
  return <div>Total: £{result}</div>;
};
