import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { IconButton } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
const CheeseItem = (props) => {
  return (
    <div>
      <Card>
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

// return (
//     <div>
//       <h2>{props.name}</h2>
//       <h3>Price per kilo: £{props.price} /Kg</h3>
//       <h3>Colour: {props.colour}</h3>
//       <img
//         src={props.image}
//         style={{ width: 200, height: 200, borderRadius: 30 }}
//         alt="hello"
//       ></img>
//     </div>
//   );
// };
