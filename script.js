var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('../index.html',null,function(error,data){
        if(error){
            res.writeHead(404);
            res.writeFile('File Not Found!');
        } else{
            res.write(data);
        }
        res.end();
    })
  }).listen(8080);

var jsondatabase = fs.readFile(database.json);
var database = JSON.parse(jsondatabase);