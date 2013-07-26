var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var buf = fs.readFileSync('index.html');
var htmlString = buf.toString();

app.get('/', function(request, response) {
  response.send(htmlString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
