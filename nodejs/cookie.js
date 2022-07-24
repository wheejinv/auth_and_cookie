import express from 'express'

const app = express();
const port = 3003;


app.use( (req, res, next) => {
  res.cookie('hi', 'hello', {
    expires: new Date(Date.now() + 500000)
  })
  next();
});


app.get('/', (req, res) => {
  // cookie 파서 안쓰면 이런식으로 옴. req.headers.cookie
  console.log(`req.headers.cookie: ${req.headers.cookie}`);

  res.send(`cookie!`);
})

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
})