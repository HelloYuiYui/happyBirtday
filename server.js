var express = require("express");
var app = express();
var http = require("http");//.Server(app);
var Quad = require("quadratic-encryptor");
// var dotenv = require("dotenv");
// var colors = require("colors");

app.use(express.static(__dirname + '/'));

console.log(Quad.encode(42, 87, "afdckjsef"));

var port = 3000;

app.get("/", function(req, res){
    res.sendFile("index.html");
})

app.get("/:vals", function(req, res) {
    console.log(req.params.vals);
    var n = (req.params.vals).split("_")[0];
    var c = (req.params.vals).split("_")[1];
    if (n.indexOf("+") > -1) {
        n = n.split("+").join(" ");
    }
    res.send(`
        <html>
            <head>
                <title>Happy BDay</title>
                <link rel="icon" href="https://static.thenounproject.com/png/33119-200.png">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <link href="https://fonts.googleapis.com/css?family=Lobster+Two" rel="stylesheet">
                <meta charset="utf-8">
                <script src="script.js"></script>
                <style>
                    body {
                        background-color: #${c};
                        height: 20vh;
                        width: 100vw;
                    }

                    h1 {
                        text-align: center;
                        margin-top: 40vh;
                        font-size: 52px;
                        text-shadow: 0px 0px 15px rgba(255, 255, 255, 1);
                        font-family: "Lobster Two", cursive;
                    } 
                </style>
            </head>
            <body>
                <h1 id="name"><i class="fa fa-birthday-cake"></i> Happy Birthday ${decodeURI(n)} <i class="fa fa-birthday-cake"></i></h1>
            </body>
        </html>
`);
})

http.listen(port, function(){
    console.log("listening on :" + port);
})