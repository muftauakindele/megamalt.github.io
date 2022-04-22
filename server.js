const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");
const app = express();
const { urlencoded } = require("body-parser");
const { sendfile } = require("express/lib/response");
const { dirname } = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "index.js"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});
app.get("/distributor", (req, res) => {
  res.sendFile(__dirname + "/public/distributor.html");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Mega Malt is listening on port 3000!")
);
