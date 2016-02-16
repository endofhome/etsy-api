var napp = require(__dirname + '/../app.js');
    assert = require('assert'),
    http = require('http');

// var expect = require("chai").expect;

var rewire = require("rewire");
var app = rewire("../app.js");
var mock = require("./mock.json");

app.__set__("path", "/dev/null");
app.__get__("path");

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
        assert.equal({ "test": "testresponse" }, data);
        done();
      });
    });
  });
});