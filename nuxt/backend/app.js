const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT;
const cookieParser = require("cookie-parser");
const cors = require("cors");

// https://stackoverflow.com/questions/57009371/access-to-xmlhttprequest-at-from-origin-localhost3000-has-been-blocked
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser());

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

    res.cookie("id", id, {
      maxAge: 1000 * 3600,
    });
    res.cookie("password", password);
    res.cookie("nick", "HeeJin Ha");
  }

  res.send({ result });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
