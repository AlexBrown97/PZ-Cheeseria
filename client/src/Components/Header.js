import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #ffab02;
  text-align: center;
  font-family: monospace;
  font-size: 40px;
  background-color: #fffacd;
  border-top: 2px solid #ffab02;
  border-bottom: 2px solid #ffab02;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <span role="img" aria-label="cheese">
        🧀
      </span>
      Patient Zero's Cheeseria
      <span role="img" aria-label="cheese">
        🧀
      </span>
    </StyledHeader>
  );
};
