// var http = require('http');

// http.createServer(
//     function(req,res){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end('Hello World!');
//     }).listen(8080);


var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send("Welcome to my API")
})

app.listen(port,()=>{
    console.log("The API works")
})