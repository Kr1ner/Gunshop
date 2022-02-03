var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html',null,function(error,data){
        if(error){
            res.writeHead(404);
            res.writeFile('File Not Found!');
        } else{
            res.write(data);
        }
        res.end();
    })
  }).listen(8080);
var database=JSON.parse(fs.readFileSync('database.json'));;
var m = database.length;
let data ={
    id:m,
    number:15+m,
    username:"anzora",
    name:"anzor mamaliadze"
};
database.push(data);
fs.writeFile('database.json', JSON.stringify(database), (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
    }
});