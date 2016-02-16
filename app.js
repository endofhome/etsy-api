var express = require('express');
var app = express();
var request = require('request');
var Listing = require('./app/scripts/model/Listing.js')
var ListingCollection = require('./app/scripts/model/ListingCollection.js')

var URL = 'https://openapi.etsy.com/v2/listings/active?api_key=w49mqdq0fic46wosw2qa4gw4';
var listingCollection = new ListingCollection();

app.get('/', function (req, res) {
  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parseListings(body);
    }
  });
});

var parseListings = function(body) {
  var responseArray = JSON.parse(body)["results"];
  var listingsArray = [];
  var arrayLength = responseArray.length;
  console.log('arrayLength: ' + arrayLength);
  for (var i = 0; i < arrayLength; i++) {
    var listing = new Listing(responseArray[i]);
    listingCollection.add(listing);
  };
};

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
