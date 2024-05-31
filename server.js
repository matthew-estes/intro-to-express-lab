const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

// 1. Be Polite, Greet the User

app.get("/greetings/:name", function (req, res) {
  console.log(req.params);
  res.send(`Hey there, ${req.params.name}!`);
});

// 2. Rolling the Dice

app.get("/roll/:number", function (req, res) {
  console.log(req.params);
  if (isNaN(req.params.number)) {
    res.send("You must specify a number.");
  } else {
    res.send(`You rolled a ${req.params.number}.`);
  }
});

// 3. I Want THAT One!

app.get("/collectibles/:index", function (req, res) {
  const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
  ];

  const index = req.params.index;
  if (index >= 0 && index < collectibles.length) {
    res.send(
      `So, you want the ${collectibles[index].name}? For $${collectibles[index].price}, it can be yours!`
    );
  } else {
    res.send("This item is not yet in stock. Check back soon!");
  }
});

//4. Filter Shoes by Query Parameters

app.get("/shoes", function (req, res) {
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" },
  ];

  let filteredShoes = [...shoes];

  const minPrice = req.query["min-price"];
  const maxPrice = req.query["max-price"];
  const type = req.query.type;

  if (!isNaN(minPrice)) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price >= minPrice);
  }
  if (!isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= maxPrice);
  }
  if (type) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.type === type);
  }
  res.send(filteredShoes);
});
