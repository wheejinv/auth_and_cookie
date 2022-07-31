import express from "express";
import parseurl from "parseurl";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {};
  }

  // get the url pathname
  const pathname = parseurl(req).pathname;

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

  next();
});

app.get("/foo", function (req, res, next) {
  res.send("you viewed this page " + req.session.views["/foo"] + " times");
});

app.get("/bar", function (req, res, next) {
  res.send("you viewed this page " + req.session.views["/bar"] + " times");
});

app.listen(3000);
