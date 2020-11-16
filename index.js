var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./domain.key', 'utf8');
var certificate = fs.readFileSync('./domain.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.get("/download",function (req,res){
    const file = "./sample.jpg";
    res.download(file); 
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8055);
httpsServer.listen(8056);
