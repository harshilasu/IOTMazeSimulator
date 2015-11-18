/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var net = require('net');
var checker = 9000;
function popup(){
    alert("Hello World");
}
function startServer(){
    var connection = new WebSocket("ws://localhost:3000");
    connection.onopen = function(){
        alert("Connection Opened");
        connection.send('Hello Server JEMKLE');
    }
    
    document.getElementById("testing").innerHTML = checker;
    checker = checker+1;
    
//    var server = net.createServer(function(socket){
//        socket.write('Echo server \r\n');
//        socket.pipe(socket);
//    });
//    server.listen(1337, '127.0.0.1');
//    alert("Server has been started.");
}
    //var net = require('net');



//var checker = 9000;
//document.getElementById("testing").value = checker;
//var client = new net.Socket();
//client.on('data',function(data){
//    
//    
//});
