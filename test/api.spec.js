var app = require(__dirname + '/../app.js'),
    http = require('http'),
    nock = require('nock');

var expect = require("chai").expect;
var mocks = require('../test/mocks');


describe('etsy', function () {

  beforeEach(function() {
    nock('https://openapi.etsy.com/v2/listings')
                    .get('/active?api_key=w49mqdq0fic46wosw2qa4gw4')
                    .reply(200, mocks);
  });

  it('should return 200', function (done) {
    http.get('http://localhost:3000', function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should do something', function (done) {
    http.get('http://localhost:3000', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        expect(data).to.equal(JSON.stringify(mocks));
        done();
      });
    });
  });

  describe('materials', function () {
    it('should do something materially', function (done) {
      http.get('http://localhost:3000/materials', function (res) {
        var data = '';

        res.on('data', function (chunk) {
          data += chunk;
        });

        res.on('end', function () {
          expect(data).to.equal(JSON.stringify({"materials":["gold","silver","bronze","tin","aluminium"],"results":[{"materials":["gold","silver","bronze","tin","aluminium"]},{"materials":["gold","silver","bronze","tin","aluminium"]},{"materials":["gold","silver","bronze","tin","aluminium"]},{"materials":["gold","silver","bronze","tin","aluminium"]},{"materials":["gold","silver","bronze","tin","aluminium"]},{"materials":["gold","silver","bronze","tin","aluminium"]},{"materials":["gold","silver","bronze","tin","aluminium"]},{"materials":["gold","silver","bronze","tin","aluminium"]},{"materials":["gold","silver","bronze","tin","aluminium"]},{"materials":["gold","silver","bronze","tin","aluminium"]}]}));
          done();
        });
      });
    });
  });
});
