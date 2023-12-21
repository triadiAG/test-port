
const express = require('express')
const app = express()
const port = 11111

app.get('/', (req, res) => {
  res.send('test port :11111')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})