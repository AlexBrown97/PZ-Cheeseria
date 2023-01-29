const express = require("express");
const app = express();

const cheeses = [
  {
    name: "Manchego",
    price: 90,
    colour:
      "Arguably the most famous Spanish cheese, Manchego varies from white to ivory-yellow, and the inedible rind from yellow to brownish-beige.",
    image:
      "https://www.seriouseats.com/thmb/xezzwf8xlReX5LThOTra0yrXU9E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__08__20170810-manchego-cheese-gran-queso-vicky-wasik-5-a8a2e66efce24e99a7b339892c68c98d.jpg",
    calculation: {
      manchego: 90,
    },
  },
  {
    name: "Brie",
    price: 55,
    colour:
      "Named after the French region from which it originated, Brie is pale in color with a slight grayish tinge under a rind of white mould.",
    image:
      "https://cdn.castellocheese.com/globalassets/world-of-cheese/cheese-type-images/square/cheese-type-brie.jpg?width=375&height=530&mode=crop",
    calculation: {
      brie: 55,
    },
  },
  {
    name: "Red Leicester",
    price: 50,
    colour:
      "Originating in England, Red Leicester is colored with a vegetable dye called annatto, which gives the cheese its distinctive deep-orange hue.",
    image:
      "https://www.greenfieldsdairy.co.uk/wp-content/uploads/2013/08/red-leicester-cheese.jpg",
    calculation: {
      redLeicester: 50,
    },
  },
  {
    name: "Feta",
    price: 40,
    colour:
      "Feta is a Greek brined white cheese made from sheep's milk or from a mixture of sheep and goat's milk.",
    image:
      "https://tarasmulticulturaltable.com/wp-content/uploads/2015/01/Feta-with-Oregano-2-of-4.jpg",
  },
  {
    name: "Cheddar",
    price: 60,
    colour:
      "This Somerset cheese can be a deep to pale yellow colour, or a yellow-orange colour when certain plant extracts are added. ",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2022/09/GettyImages-470340853.jpg",
  },
];

app.get("/api", (req, res) => {
  res.json({ cheeses });
});
// app.post("/cheese", function (req, res) {
//   const newCheese = {
//     name: req.body.name,
//     price: req.body.price,
//     colour: req.body.colour,
//     image: req.body.image,
//   };
//   cheeses.push(newCheese);
//   res.type("json");
//   res.send({ message: "Post Successful" });
//   console.log(cheeses);
// });
app.all("*", (req, res) => res.send("That route does not exist"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
