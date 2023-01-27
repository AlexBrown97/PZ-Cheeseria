import React, { useEffect, useState } from "react";
import "../Card.css";
import CheeseItem from "./CheeseItem";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const Cheeses = () => {
  const rowStyling = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <Container>
      <Grid2 container>
        {backendData.cheeses?.map((item, i) => (
          <Grid2 xs={12} md={6} lg={4}>
            <CheeseItem
              key={i}
              name={item.name}
              price={item.price}
              colour={item.colour}
              image={item.image}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};
