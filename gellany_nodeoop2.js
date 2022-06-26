const express = require('express')
var parseUrl = require('body-parser')
const app = express()
let encodeUrl = parseUrl.urlencoded({ extended: false })

class gellany_nodeoop2 {
  constructor(form = '', port = 0) {
  this.port = port
  this.form = form
}


main() {
//console.log(this.form)
app.get('/', function(req, res) {
  res.sendFile(__dirname+form);
  
});

app.post('/', encodeUrl, function(req, res) {
  console.log('Form request:', req.body)
  res.sendStatus(200)
});
//console.log(this.form)
app.listen(this.port)

//console.log(this.port)
//console.log(this.form)
}

}

const run = new gellany_nodeoop2(form = '/form.html', port = 4000).main()
run
