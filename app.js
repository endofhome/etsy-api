var express = require('express');
var app = express();
var request = require('request');

var URL = 'https://openapi.etsy.com/v2/listings/active?api_key=w49mqdq0fic46wosw2qa4gw4';


app.get('/', function (req, res) {
  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.setHeader('Content-type', 'application/json');
      res.send(body);
    }
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
