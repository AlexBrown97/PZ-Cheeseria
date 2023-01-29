import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #ffab02;
  text-align: center;
  text-shadow: 1px 1px 2px grey;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <span role="img" aria-label="cheese">
        🧀
      </span>
      Patient Zero's Cheeseria!
      <span role="img" aria-label="cheese">
        🧀
      </span>
    </StyledHeader>
  );
};
