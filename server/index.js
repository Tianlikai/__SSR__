const fs = require("fs");
const path = require("path");
const express = require("express");
const ReactSSR = require("react-dom/server");
const serverEntry = require("../dist/server_entry.js").default;

const app = express();

const template = fs.readFileSync(
  path.join(__dirname, "../dist/index.html"),
  "utf-8"
);

app.use("/public", express.static(path.resolve(__dirname, "../dist")));

app.get("*", function(req, res) {
  const appString = ReactSSR.renderToString(serverEntry);
  res.send(template.replace("<app></app>", appString));
});

app.listen(3333, function() {
  console.log("server is listening on 3333");
});
