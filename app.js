var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')


app.get('/', function(req, res) {
  // var xhr = new XMLHttpRequest();
  // var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";
  // if (!xhr) return false;

  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === XMLHttpRequest.DONE) {
  //     if(xhr.status === 200) {
  //       console.log(xhr.responseText);
  //     } else {
  //       console.log(xhr.status);
  //     }
  //   }
  // }

  // xhr.open('GET', quoteUrl);
  // xhr.send();

  

  res.render('index');
});


app.listen('3000', process.env.ip, function() {
  console.log('server started');
})