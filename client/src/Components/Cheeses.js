import React, { useEffect, useState } from "react";
import "../Card.css";
import CheeseItem from "./CheeseItem";
import { Container, Grid } from "@mui/material";
import CalculatorInput from "./CalculatorInput";

export const Cheeses = () => {
  const [backendData, setBackendData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setBackendData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <Container>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <Grid container>
        {backendData.cheeses?.map((item, i) => (
          <Grid padding={2} xs={12} md={6} lg={4}>
            <CheeseItem
              key={i}
              name={item.name}
              price={item.price}
              colour={item.colour}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
      <CalculatorInput cheeses={backendData.cheeses} />
    </Container>
  );
};
