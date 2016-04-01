var express = require('express')
express().use('/',express.static(__dirname)).listen(8080);

console.log("Listening on 8080...");