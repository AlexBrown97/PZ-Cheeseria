import { useState } from "react";
import { CalculatorResult } from "./CalculatorResult";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #fff081;
  border-radius: 5px;
  border: 1px solid black;
`;

const StyledHeader = styled.h2`
  color: #ffab02;
  font-family: monospace;
  font-size: 30px;
`;

const StyledForm = styled.form`
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fffacd;
  width: 310px;
  padding-top: 5px;
  padding-left: 10px;
  padding-bottom: 10px;
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
      <StyledHeader>
        <span role="img" aria-label="cheese">
          💲
        </span>
        Cost Calculator
        <span role="img" aria-label="cheese">
          💲
        </span>
      </StyledHeader>
      <StyledForm>
        <div>
          <select
            style={{
              marginLeft: "90px",
              fontSize: "20px",
              borderRadius: "5px",
            }}
          >
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
        <label style={{ fontWeight: "bold" }}>Weight(g)</label>
        <StyledInput
          onChange={weightChangeHandler}
          value={enteredCheeseWeight}
          type="number"
        />
        <CalculatorResult
          inputWeight={enteredCheeseWeight}
          selectedCheese={selectedCheese}
        />
      </StyledForm>
    </div>
  );
};

export default CalculatorInput;
