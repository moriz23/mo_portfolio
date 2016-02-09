var express = require('express');
var bodyParser = require('body-parser');
var session = require("express-session")
var app = express();
var PORT = process.env.PORT || 8080;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use("/clickGame", express.static("public/clickGame"));
app.use("/RPS_css", express.static("public/RPS_css"))


app.get('/portfolio.html', function(req, res) {
  res.sendFile(process.cwd() + '/views/portfolio.html');
});

app.get('/about.html', function(req, res) {
  res.sendFile(process.cwd() + '/views/about.html');
});

app.get('/blog.html', function(req, res) {
  res.sendFile(process.cwd() + '/views/blog.html');
});

app.get('/github.html', function(req, res) {
  res.sendFile(process.cwd() + '/views/github.html');
});

app.get('/contact.html', function(req, res) {
  res.sendFile(process.cwd() + '/views/contact.html');
});

app.get('/nba.html', function(req, res) {
  res.sendFile(process.cwd() + '/views/nba.html');
});

app.get('/index.html', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
