var express = require('express');
var app = express();
var request = require('request');
var ListingCollection = require('./app/scripts/model/ListingCollection.js')

var URL = 'https://openapi.etsy.com/v2/listings/active?api_key=w49mqdq0fic46wosw2qa4gw4';
var listingCollection = new ListingCollection();


app.get('/', function (req, res) {
  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    }
  });
});

app.get('/price', function (req, res) {
  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parseListings(body);
      var response = {};
      response["averagePrice"] = listingCollection.average();
      response["highestPrice"] = listingCollection.maximumPrice();
      response["highestPriceListing"] = listingCollection.maximumPriceListing();
      response["lowestPrice"] = listingCollection.minimumPrice();
      response["lowestPriceListing"] = listingCollection.minimumPriceListing();
      res.setHeader('Content-Type', 'application/json');
      res.send(response);
    }
  });
});

app.get('/materials', function (req, res) {
  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var list = {};
      data.results.forEach(function (item) {
        item.materials.forEach(function (material) {
          if (list[material]) {
            list[material] +=1;
            } else {
             list[material] = 1;
           }
        });
      });

      var sortedArray = Object.keys(list).sort(function(a,b){return list[b]-list[a]})
      var topFive = sortedArray.splice(0,5);

      var rawMaterialsData = { "materials": topFive, "results": [] };

      data.results.forEach(function (item) {
        item.materials.forEach(function (material) {
          if (topFive.indexOf(material) != -1) {
            rawMaterialsData.results.push(item);
          }
        });
      });

      res.setHeader('Content-type', 'application/json');
      res.send(rawMaterialsData);
    }
  })
})

app.get('/tags', function (req, res) {
  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var list = {};
      data.results.forEach(function (item) {
        item.tags.forEach(function (tag) {
          if (list[tag]) {
            list[tag] +=1
            } else {
             list[tag] = 1;
           }
        })
      })
      var sortedTagArray = Object.keys(list).sort(function(a,b){return list[b]-list[a]})
      var topFive = sortedTagArray.splice(0,5);

      var rawTagsData = { "tags": topFive, "results": [] };

      data.results.forEach(function (item) {
        item.tags.forEach(function (tag) {
          if (topFive.indexOf(tag) != -1) {
            rawTagsData.results.push(item);
          }
        })
      });

      res.setHeader('Content-type', 'application/json');
      res.send(rawTagsData);
    }
  })
})

var parseListings = function(body) {
  listingCollection.add(JSON.parse(body)["results"]);
};

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
