var express = require('express');
var app = express();
var request = require('request');



app.get('/', function (req, res) {
  request('https://openapi.etsy.com/v2/listings/active?api_key=w49mqdq0fic46wosw2qa4gw4', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body)
    }
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
