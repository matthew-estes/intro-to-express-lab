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
    res.send(`So, you want the ${collectibles[index].name}? For $${collectibles[index].price}, it can be yours!`);
    } else { 
      res.send("This item is not yet in stock. Check back soon!");
    };
  });


