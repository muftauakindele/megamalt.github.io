const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");
const app = express();
const { urlencoded } = require("body-parser");
const { sendfile } = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "index.js"));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./public/about.html", { root: __dirname });
});
app.get("/distributor", (req, res) => {
  res.sendFile("./public/distributor.html", { root: __dirname });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Mega Malt is listening on port 3000!")
);
