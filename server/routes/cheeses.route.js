// *IMPROVEMENTS WITH MORE TIME*

/* I tried splitting requests out into routes but came across two errors when trying to run:
  1: "cannot use import statement outside a module"
I tried to solve this error by setting {"type": "module"} inside the package json, but this lead to another error:
  2: "require is not defined"
If I had more time I would like to have seperated the routes out and get this POST request working, allowing the capability to add a new cheese:

/* import express from "express";
 const router = express.Router();

 router.get("/api", (req, res) => {
   res.json({ cheeses });
 });

 export default router;


 app.post("/cheese", function (req, res) {
   const newCheese = {
     name: req.body.name,
     price: req.body.price,
     colour: req.body.colour,
     image: req.body.image,
   };
   cheeses.push(newCheese);
   res.type("json");
   res.send({ message: "Post Successful" });
   console.log(cheeses);
 });
*/
