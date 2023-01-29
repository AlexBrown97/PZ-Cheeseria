import { useState } from "react";
import { CalculatorResult } from "./CalculatorResult";
import styled from "styled-components";
import { border, width } from "@mui/system";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #fffacd;
  border-radius: 5px;
  border: 1px solid black;
`;

const StyledForm = styled.section`
backgroundColor:#FFFACD";
width: 250;
border: 2 solid black
`;

const CalculatorInput = (props) => {
  const [selectedCheese, setSelectedCheese] = useState("");
  const [enteredCheeseWeight, setEnteredCheeseWeight] = useState(0);

  const weightChangeHandler = (event) => {
    setEnteredCheeseWeight(event.target.value);
  };

  const cheeseChangeHandler = (event) => {
    setSelectedCheese(event.target.value);
  };

  return (
    <div>
      <h2>Cheese Calculator</h2>
      <form
        style={{
          backgroundColor: "	#FFFACD",
          width: 310,
          paddingTop: 5,
          paddingLeft: 10,
          paddingBottom: 10,
        }}
      >
        <div>
          <select>
            {props.cheeses?.map((cheese, i) => {
              return (
                <option
                  key={i}
                  onChange={cheeseChangeHandler}
                  value={selectedCheese}
                >
                  {cheese.name}
                </option>
              );
            })}
          </select>
        </div>
        <label>Weight(g)</label>
        <Input
          value={enteredCheeseWeight}
          type="number"
          onChange={weightChangeHandler}
        />
        <CalculatorResult inputWeight={enteredCheeseWeight} />
      </form>
    </div>
  );
};

export default CalculatorInput;
