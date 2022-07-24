const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT

app.use(cors({origin: true}))

app.get('/', (req, res) => {
  res.send(`Hello World!\nfrom server port - ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})