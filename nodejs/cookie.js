import express from 'express'
import cookieParser from 'cookie-parser'

const app = express();
const port = 3003;

app.use(cookieParser());
app.use( (req, res, next) => {
  // https://expressjs.com/en/4x/api.html#res.cookie

  res.cookie('hi', 'hello', {
    maxAge: 1000 * 3600,
    secure: true, // https 통신일 때만 동작한다. 근데 http://localhost 에서는 보여짐...
  })

  res.cookie('httpOnly', 'yesyes', {
    httpOnly: true, // 웹 브라우저에서 js 로 접근은 못하게 막는다.
  })

  // 웹 브라우저에서 /cookie 밑의 하위 도메인에 대해서만 동작하도록 한다.
  res.cookie('path alive', 'value', {
    path: '/cookie'
  })

  // 해당 도메인에서만 동작되도록 한다.
  res.cookie('Domain', 'Domain', {
    domain: 'localhost'
  })
  next();
});


app.get('/*', (req, res) => {
  console.log(JSON.stringify(req.cookies));

  res.send(`cookie!`);
})

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
})