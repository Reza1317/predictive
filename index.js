/*
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
*/

/*
var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(req, res){res.send('hello world');});

var port = process.env.Port || 5000;

app.listen(port,function(){console.log("Listening on" + port);});
*/

/*
var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(5000);
});
*/


var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile('./index.html');
});

app.listen(3000);



console.log("Running at Port 3000");
