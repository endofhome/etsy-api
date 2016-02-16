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


app.get('/materials', function (req, res) {
  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var list = {};
      data.results.forEach(function (item) {
        item.materials.forEach(function (material) {
          if (list[material]) {
            list[material] +=1
            } else {
             list[material] = 1;
           }
        })
      })
      console.log(list);
      var sortedArray = Object.keys(list).sort(function(a,b){return list[b]-list[a]})
      var topFive = sortedArray.splice(0,5);
      console.log(topFive);

      res.setHeader('Content-type', 'application/json');
      res.send(topFive);
    }
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

