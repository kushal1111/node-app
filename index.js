const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const cors = require('cors')
app.use(cors())

app.post('/register', (req, res) => {
  console.log(req.body)
    res.json({
      message:"recieved"
    })
  })
  app.get('/me', (req, res) => {
    res.json({name:'kushal'})
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
