/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var net = require('net');
var checker = 9000;
var connection;
function popup(){
    alert("Hello World");
}
function startServer(){
    connection = new WebSocket("ws://192.168.1.3:3000");
    connection.onopen = function(){
        document.getElementById("testing").innerHTML = 40;
    }
    
    //document.getElementById("testing").innerHTML = checker;
    checker = checker+1;
}


function up(){
    connection.send('up');
    document.getElementById("left").innerHTML = 0.5;
    document.getElementById("right").innerHTML = 0.5;
}

function down(){
        document.getElementById("left").innerHTML = -0.5;
    document.getElementById("right").innerHTML = -0.5;

    connection.send('down');
}

function left(){
    document.getElementById("left").innerHTML = -0.5;
    document.getElementById("right").innerHTML = 0.5;
    connection.send('left');
}

function right(){
   document.getElementById("left").innerHTML = 0.5;
    document.getElementById("right").innerHTML = -0.5;
    connection.send('right');
}

function stop(){
     document.getElementById("left").innerHTML = 0.0;
    document.getElementById("right").innerHTML = 0.0;
    connection.send('stop');
}