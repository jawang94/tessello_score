var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
const session = require("express-session");

app.use(
  session({
    secret: "evenscorekey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
  })
);

mongoose.Promise = global.Promise;
require("./server/config/mongoose.js");
require("./server/models/user.js");

const server = app.listen(8000, function() {
  console.log("Server listening on port 8000");
});

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

require("./server/config/routes.js")(app);
app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"));
});
