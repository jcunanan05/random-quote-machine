var express = require('express');
var axios = require('axios');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')


app.get('/', function(req, res) {
  var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";
  var quote = {}

  axios.get(quoteUrl)
    .then(response => {
      quote = response.data;
      console.log(quote);
      res.render('index', {quote: quote});
    })
    .catch(error => {
      console.log(error);
    });
  

  
});


app.listen('3000', process.env.ip, function() {
  console.log('server started');
})