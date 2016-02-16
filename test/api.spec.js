var app = require(__dirname + '/../app.js');,
    assert = require('assert'),
    http = require('http');

var expect = require("chai").expect;


describe('app', function () {
  before(function () {
    app.listen(3000);
  });

  after(function () {
    app.close();
  });
});

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000', function (res) {
      assert.equal(200, res.statusCode);
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
        assert.equal('Hello, world!\n', data);
        done();
      });
    });
  });
});