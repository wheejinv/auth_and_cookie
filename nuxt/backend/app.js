const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;

app.use(cors({ origin: true }));

//// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Hello World!\nfrom server port - ${port}`);
});

app.post("/login", (req, res) => {
  const { id, password } = req.body;

  let result = false;
  if (id === "test" && password === "test") {
    result = true;
  }

  res.send({ result });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
