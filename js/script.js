database = [];

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
        console.log(database);
    }
}