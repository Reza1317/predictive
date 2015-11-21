var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World fucking assholes!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

/*
var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(req, res){res.send('hello world');});

var port = process.env.Port || 5000;

app.listen(port,function(){console.log("Listening on" + port);});
*/

