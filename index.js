var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(req, res){
  res.send('hello world again from the new js; which is supposed to point to html');
});

var port = process.env.Port || 5000;

app.listen(port,function(){console.log("Listening on" + port);});
