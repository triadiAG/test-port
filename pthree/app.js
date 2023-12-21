
const express = require('express')
const app = express()
const port = 11113

app.get('/', (req, res) => {
  res.send('test port :11113')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})