import React from "react";

export const CalculatorResult = (props) => {
  const weightInGrams = 1000 / props.inputWeight;
  const result = 50 / weightInGrams;
  return <div style={{ fontWeight: "bold" }}>Total: £{result}</div>;
};

// *IMPROVEMENTS WITH MORE TIME*
/* Right now the calculator hard codes a value (£50) for all cheeses per Kg. With more time, I 
would have liked to get the price of every individual cheese and calculate based on different amounts
*/
