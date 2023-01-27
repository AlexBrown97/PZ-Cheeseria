const express = require("express");
const app = express();

const cheeses = [
  {
    name: "Manchego",
    price: 90,
    colour:
      "Arguably the most famous Spanish cheese, Manchego varies from white to ivory-yellow, and the inedible rind from yellow to brownish-beige.",
    image:
      "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjNiM2I3ODcxN2Y3ZTQ2YjI1ZWJhZjMxMDNjZTU3ZTYyLmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=18245515af0a61606e87f3787dad0ede24db2107b97817860b079c70e8d9b09a",
  },
  {
    name: "Brie",
    picture: "",
    price: 55,
    colour:
      "Named after the French region from which it originated, Brie is pale in color with a slight grayish tinge under a rind of white mould.",
    image:
      "https://cdn.castellocheese.com/globalassets/world-of-cheese/cheese-type-images/square/cheese-type-brie.jpg?width=375&height=530&mode=crop",
  },
  {
    name: "Red Leicester",
    picture: "",
    price: 50,
    colour:
      "Originating in England, Red Leicester is colored with a vegetable dye called annatto, which gives the cheese its distinctive deep-orange hue.",
    image:
      "https://www.greenfieldsdairy.co.uk/wp-content/uploads/2013/08/red-leicester-cheese.jpg",
  },
  {
    name: "Feta",
    picture: "",
    price: 40,
    colour:
      "Feta is a Greek brined white cheese made from sheep's milk or from a mixture of sheep and goat's milk.",
    image:
      "https://tarasmulticulturaltable.com/wp-content/uploads/2015/01/Feta-with-Oregano-2-of-4.jpg",
  },
  {
    name: "Cheddar",
    picture: "",
    price: 60,
    colour:
      "This famour Somerset cheese can be a deep to pale yellow colour, or a yellow-orange colour when certain plant extracts are added, such as beet juice. ",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2022/09/GettyImages-470340853.jpg",
  },
];

app.get("/api", (req, res) => {
  res.json({ cheeses });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
