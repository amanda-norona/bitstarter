var express = require('express');
var app = express();

var fs = require('fs');
var data =fs.readFileSync("index.html", "utf-8");

//var app =express.createServer(express.logger());

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(data);
});
//var port = process.env.PORT || 5000;

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
