const express = require("express");
const data = require("./data.js");

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.allProducts);
  res.send(data.manStuffProducts);
  res.send(data.kidProducts);
  res.send(data.skirtProducts);
});

app.listen(5000, () => {
  console.log("serve at  http:/localhost:5000");
});
