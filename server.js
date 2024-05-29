const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(morgan('dev'));





// 1. Be Polite, Greet the User

app.get('/greetings/:name', function(req, res){
    console.log(req.params);
    res.send(`Hey there, ${req.params.name}!`)
})



// 2. Rolling the Dice
app.get('/roll/:number', function (req, res) {
    console.log(req.params);
     if (isNaN(req.params.number)) {
        res.send('You must specify a number.');
     } else {
        res.send(`You rolled a ${req.params.number}.`);   
     }
})





app.listen(3000, function(){
    console.log("Listening on port 3000")
})