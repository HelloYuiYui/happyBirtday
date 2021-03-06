var express = require("express");
var app = express();
var http = require("http");//Server(app);
// var dotenv = require("dotenv");
// var colors = require("colors");

app.use(express.static(__dirname + '/'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/:vals", function(req, res) {
    // console.log(req.params.vals);
    var n = (req.params.vals).split("_")[0];
    var c = (req.params.vals).split("_")[1];
    if (n.indexOf("+") > -1) {
        n = n.split("+").join(" ");
    }
    res.send(`<html><head><title>Happy BDay</title><link rel="icon" href="https://static.thenounproject.com/png/33119-200.png"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link href="https://fonts.googleapis.com/css?family=Lobster+Two" rel="stylesheet"><meta charset="utf-8"><script src="script.js"></script><style>body {background-color: #${c};height: 20%;width: 99%;}h1 {text-align: center;margin-top: 40vh;font-size: 52px;text-shadow: 0px 0px 15px rgba(255, 255, 255, 1);font-family: "Lobster Two", cursive;}</style></head><body><h1 id="name"><i class="fa fa-birthday-cake"></i> Happy Birthday ${decodeURI(n)} <i class="fa fa-birthday-cake"></i></h1></body></html>`);
})

app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || '0.0.0.0');

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
