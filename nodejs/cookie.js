import express from 'express'
import cookieParser from 'cookie-parser'

const app = express();
const port = 3003;

app.use(cookieParser());
app.use( (req, res, next) => {
  res.cookie('hi', 'hello', {
    expires: new Date(Date.now() + 500000)
  })
  next();
});


app.get('/', (req, res) => {
  console.log(JSON.stringify(req.cookies));

  res.send(`cookie!`);
})

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
})