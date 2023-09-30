const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();

app.listen(3000);

app.use(cors());

app.get("/random", (req, res) => {
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then(({ data }) => res.send(data))
    .catch((error) => console.log(error))
    .finally(() => res.end());
});

app.get("/categories", (req, res) => {
  axios
    .get("https://api.chucknorris.io/jokes/categories")
    .then(({ data }) => res.send(data))
    .catch((error) => console.log(error))
    .finally(() => res.end());
});

app.get("/category/:category", (req, res) => {
  axios
    .get(
      `https://api.chucknorris.io/jokes/random?category=${req.params.category}`
    )
    .then(({ data }) => res.send(data))
    .catch((error) => console.log(error))
    .finally(() => res.end());
});

app.use((req, res, next) => {
  next();
});
