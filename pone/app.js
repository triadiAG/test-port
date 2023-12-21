
const express = require('express')
const app = express()
const port = 11112

app.get('/', (req, res) => {
  res.send('test port :11112')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})