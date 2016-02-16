function ListingCollection() {
    this.data = [];
}

ListingCollection.prototype.add = function(listings) {
  this.data = this.data.concat(listings);
}

ListingCollection.prototype.average = function() {
  var dataLength = this.data.length;
  var sum = 0;
  for(var i = 0; i < dataLength; i++) {
    sum += parseFloat(this.data[i].price);
  }
  return sum/dataLength;

};

ListingCollection.prototype.maximumPrice = function() {
  var dataLength = this.data.length;
  var max = - 1;
  for(var i = 0; i < dataLength; i++) {
    var current = parseFloat(this.data[i].price);
    max = (current > max) ? current : max;
  }
  return parseFloat(max);
}

ListingCollection.prototype.maximumPriceListing = function() {
  var dataLength = this.data.length;
  var maxPrice = this.maximumPrice();
  for(var i = 0; i < dataLength; i++) {
    if (parseFloat(this.data[i].price) === maxPrice) {
      return this.data[i];
    }
  }
}

ListingCollection.prototype.minimumPrice = function() {
  var dataLength = this.data.length;
  var min = parseFloat(this.data[0].price);
  for(var i = 1; i < dataLength; i++) {
    var current = parseFloat(this.data[i].price);
    min = (current < min) ? current : min;
  }
  return parseFloat(min);
}

ListingCollection.prototype.minimumPriceListing = function() {
  var dataLength = this.data.length;
  var minPrice = this.minimumPrice();
  for(var i = 0; i < dataLength; i++) {
    if (parseFloat(this.data[i].price) === minPrice) {
      return this.data[i];
    }
  }
}

module.exports = ListingCollection;
