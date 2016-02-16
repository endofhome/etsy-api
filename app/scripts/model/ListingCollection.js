var ListingCollection = function() {
    this.data = [];
}

ListingCollection.prototype.add = function(listing) {
  this.data.push(listing);
}

module.exports = ListingCollection;