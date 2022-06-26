
class AccountModel {
  constructor(options = 1, str1 = '', str2 = '') {
   
    this.name = 'Base'
    this.url = 'http://azat.co/api'
    this.url +='/accounts/'
    this.str1 = str1
    this.str2 = str2
    this.options = options
    //this.data = [this.str1[this.str1.length - (this.options)], this.str2[this.str2.length - (this.options)]]
  }

    data() { return [this.str1[this.str1.length - (this.options)], this.str2[this.str2.length - (this.options)]];
             //return this.str1;
}

  get Name() { 
     return `Class name: ${this.name}`
  }

  get accountsData() { 
    return this.data()
  }

}

const accounts = new AccountModel(options = 2, str1 = '32113123123', str2 = '524214691')
//accounts.getName()
//console.log('Data is %s', accounts.accountsData)

var http = require('http');    
http.createServer(function (req, res) {  

    res.write(accounts.accountsData + "\n");
    res.write(accounts.Name + "\n");

    res.end();  
}).listen(5000);  
console.log('Server running at 5000');  
