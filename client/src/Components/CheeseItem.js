import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CheeseItem = (props) => {
  return (
    <div>
      <Card style={{ backgroundColor: "	#FFFACD" }}>
        <CardHeader title={props.name} subheader={`£${props.price} /Kg`} />
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt="cheese"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.colour}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default CheeseItem;
