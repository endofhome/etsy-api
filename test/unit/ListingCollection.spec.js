var app = require(__dirname + '/../../app.js');
var ListingCollection = require(__dirname + '/../../app/scripts/model/listingCollection.js');
var expect = require("chai").expect;

describe('ListingCollection', function() {

  var listingCollection = new ListingCollection();

  var mockListingOne =
  {
        "listing_id":205149514,
        "state":"active",
        "price":"36.00",
        "currency_code":"USD",
        "quantity":42
  }
  var mockListingTwo =
  {
        "listing_id":220141055,
        "state":"active",
        "price":"35.00",
        "currency_code":"USD",
        "quantity":86
  }

  beforeEach(function(){
    listingCollection = new ListingCollection();
  });

  it('should add listings to the collection', function() {
    listingCollection.add([mockListingOne, mockListingTwo]);
    expect(listingCollection.data[0]).to.equal(mockListingOne);
  });

  beforeEach(function(){
    listingCollection.add(mockListingOne);
    listingCollection.add(mockListingTwo);
  });

  it('should return average price of listings', function() {
    expect(listingCollection.average()).to.equal(35.50);
  });

  it('should return highest price', function() {
    expect(listingCollection.maximumPrice()).to.equal(36.00);
  });

  it('should return highest priced listing', function(){
    expect(listingCollection.maximumPriceListing()).to.equal(mockListingOne);
  });

  it('should return lowest price', function() {
    expect(listingCollection.minimumPrice()).to.equal(35.00);
  });

  it('should return lowest priced listing', function(){
    expect(listingCollection.minimumPriceListing()).to.equal(mockListingTwo);
  });
});
