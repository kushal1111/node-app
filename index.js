const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const cors = require('cors')
app.use(cors())
const dbArr = [{
  name: 'Nescafe coffee',
  price: '500',
  image: "data:image/jpeg;base64,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",
  currency: '$'
},{
  name: 'Starbucks',
  image: "data:image/png;base64,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",
  price: '450',
  currency: '$'
},{
  name: 'Kitkat',
  price: '900',
  image:"data:image/jpeg;base64,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",
  currency: '$'
}]

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
app.get('/products',(req,res) => {
  res.json({productList:dbArr})
})