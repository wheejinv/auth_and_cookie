import express from "express";
import session from "express-session";
import FileStore from "session-file-store";

const fileStore = FileStore(session);
const fileStoreOptions = {};

const app = express();

app.use(
  // 세션은 서버가 재시작 되는 순간 사라지는 휘발성이다.
  // 이를 보완하기 위해 redis 등을 사용하는건가봄.
  session({
    secret: "as;ldkioasej121!",
    resave: false,
    saveUninitialized: true,
    store: new fileStore(fileStoreOptions),
  }),
);

app.get("/", function (req, res, next) {
  console.log(req.session);

  if (req.session.num === undefined) {
    req.session.num = 1;
  } else {
    req.session.num += 1;
  }

  res.send(`Views: ${req.session.num}`);
});

app.listen(3000);
