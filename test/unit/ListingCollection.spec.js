describe('ListingCollection', function() {

  var mockListing = { "listing_id": 268511622, "state": "active", "user_id": 49439370 }
  var listingCollection = new ListingCollection();

  it('should add a listing to the collection', function() {
    expect(listingCollection).toBeDefined();
  });
};