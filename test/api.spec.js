var app = require(__dirname + '/../app.js'),
    http = require('http'),
    nock = require('nock');

var expect = require("chai").expect;


describe('/', function () {

  beforeEach(function() {
    nock('https://openapi.etsy.com/v2/listings')
                    .get('/active?api_key=w49mqdq0fic46wosw2qa4gw4')
                    .reply(200, { "results" : [ {'test' : 'testresponse' } ]});

  });

  it('should return 200', function (done) {
    http.get('http://localhost:3000', function (res) {
      console.log(res);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should say "Hello, world!"', function (done) {
    http.get('http://localhost:3000', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        expect(data["results"]).to.equal(JSON.stringify({ 'test' : 'testresponse' }));
        done();
      });
    });
  });
});
