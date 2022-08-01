const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const bodyParser = require("body-parser");

const fileStoreOptions = {};

//// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(
  // 세션은 서버가 재시작 되는 순간 사라지는 휘발성이다.
  // 이를 보완하기 위해 redis 등을 사용하는건가봄.
  session({
    secret: "as;ldkioasej121!",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(fileStoreOptions),
  }),
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
  }),
);

app.get("/auth", (req, res) => {
  res.send({
    auth: !!req.session.auth,
  });
});

app.get("/", (req, res) => {
  res.cookie("helloCookie", "helloCookie");

  if (req.session.num === undefined) {
    req.session.num = 1;
  } else {
    req.session.num += 1;
  }

  res.send(`Views: ${req.session.num}`);
});

app.post("/login", (req, res) => {
  const { id, password } = req.body;

  let result = false;
  if (id === "test" && password === "test") {
    result = true;

    req.session.auth = true;
  }

  res.send({ result });
});

app.get("/logout", (req, res) => {
  req.session.destroy();

  res.send({ result: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
