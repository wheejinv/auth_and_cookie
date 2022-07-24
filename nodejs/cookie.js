import express from 'express'
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  res.send('cookie!');
})

app.listen(port, () => {
  console.log('Server started on port ');
})