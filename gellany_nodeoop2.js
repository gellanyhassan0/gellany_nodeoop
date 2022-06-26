const express = require('express')
var parseUrl = require('body-parser')
const app = express()


let encodeUrl = parseUrl.urlencoded({ extended: false })

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/form.html')
});

app.post('/', encodeUrl, function(req, res) {
  console.log('Form request:', req.body)
  res.sendStatus(200)
});

app.listen(4000)
