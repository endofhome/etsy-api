var express = require('express');
var app = express();
var https = require('https');

app.get('/', function (req, res) {
  https.get('https://openapi.etsy.com/v2/listings/active?api_key=w49mqdq0fic46wosw2qa4gw4',
    function(data) {
      console.log(data.body);
    }
  );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
