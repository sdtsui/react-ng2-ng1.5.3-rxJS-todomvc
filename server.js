var express = require('express');
var app = express();
var port = 8080;

app.use('/',express.static(__dirname));
console.log("Listening on port: ", port);
app.listen(port);