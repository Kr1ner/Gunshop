var fs = require("fs");
var http = require("http");
var express = require("express");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
  }).listen(8080);

var jsondata = fs.readFileSync('database.json')
var database = JSON.parse(jsondata);
var i = 0;

function Login(){
    var nme = document.getElementById("username").value;
    var pwd = document.getElementById("pwd").value;
}

function addNewUser(){
    var nme = document.getElementById("username").value;
    var pwd = document.getElementById("pwd").value;
    if(nme !="" && pwd !=""){
        let userData={
            username:nme,
            password:pwd
        }
        database.push(userData);
        fs.writeFile(database.json,JSON.stringify(database));
    }
    else{
        document.getElementById("errMsg").innerHTML = "Please enter your caredentials!";
    }
}