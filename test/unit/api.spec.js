var app = require(__dirname + '/../app.js');
var port = 3000;

var expect = require("chai").expect;


describe('app', function () {

  before (function (done) {
    app.listen(port, function (err, result) {
      if (err) {
        done(err);
      } else {
        done();
      }
  });

  after(function (done) {
    app.close();
  });

  it('should exist', function (done) {
    should.exist(app);
    done();
  });

  it('should be listening at localhost:3333', function (done) {
    var headers = defaultGetOptions('/');
    http.get(headers, function (res) {
      res.statusCode.should.eql(404);
      done();
    });
  });

});



