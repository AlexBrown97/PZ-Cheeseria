import React from "react";
import styled from "styled-components";
// import styled from "styled-components";

const StyledHeader = styled.h1`
  text-align: center;
`;

export const Header = () => {
  return <StyledHeader>Patient Zero's Cheeseria!</StyledHeader>;
};
