'use strict';
const express = require('express')
const app = module.exports = express()
const server = app.listen(3000)
var io = require('socket.io-client')
var socket = io.connect("http://104.131.176.232:3000")
const gpio = require('rpi-gpio')

//event names
//const evp = "EVP"
const np = "NORMAL_OPERATION"
const tl = "TRAFFIC_LIGHTS"

var idarr = [3,5,7,8,10,12,11,13,15,22,24,26] //gpio pins
var a, b, c, d, e, f, g, h, x;

//gpio functions
//Side 1
function on3() {
    gpio.write(3, true, function(err) {
        if (err) throw err;
        console.log('Pin 3 on!');
    });
}
function off3() {
    gpio.write(3, false, function(err) {
        if (err) throw err;
        console.log('Pin 3 off!');
    });
}

function on5() {
    gpio.write(5, true, function(err) {
        if (err) throw err;
        console.log('Pin 5 on!');
    });
}
function off5() {
    gpio.write(5, false, function(err) {
        if (err) throw err;
        console.log('Pin 5 off!');
    });
}

function on7() {
    gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Pin 7 on!');
    });
}
function off7() {
    gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Pin 7 off!');
    });
}

//Side 2
function on8() {
    gpio.write(8, true, function(err) {
        if (err) throw err;
        console.log('Pin 8 on!');
    });
}
function off8() {
    gpio.write(8, false, function(err) {
        if (err) throw err;
        console.log('Pin 8 off!');
    });
}

function on10() {
    gpio.write(10, true, function(err) {
        if (err) throw err;
        console.log('Pin 10 on!');
    });
}
function off10() {
    gpio.write(10, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 off!');
    });
}

function on12() {
    gpio.write(12, true, function(err) {
        if (err) throw err;
        console.log('Pin 12 on!');
    });
}
function off12() {
    gpio.write(12, false, function(err) {
        if (err) throw err;
        console.log('Pin 12 off!');
    });
}

//Side 3
function on11() {
    gpio.write(11, true, function(err) {
        if (err) throw err;
        console.log('Pin 11 on!');
    });
}
function off11() {
    gpio.write(11, false, function(err) {
        if (err) throw err;
        console.log('Pin 11 off!');
    });
}

function on13() {
    gpio.write(13, true, function(err) {
        if (err) throw err;
        console.log('Pin 13 on!');
    });
}
function off13() {
    gpio.write(13, false, function(err) {
        if (err) throw err;
        console.log('Pin 13 off!');
    });
}

function on15() {
    gpio.write(15, true, function(err) {
        if (err) throw err;
        console.log('Pin 15 on!');
    });
}
function off15() {
    gpio.write(15, false, function(err) {
        if (err) throw err;
        console.log('Pin 15 off!');
    });
}

//Side 4
function on22() {
    gpio.write(22, true, function(err) {
        if (err) throw err;
        console.log('Pin 22 on!');
    });
}
function off22() {
    gpio.write(22, false, function(err) {
        if (err) throw err;
        console.log('Pin 22 off!');
    });
}

function on24() {
    gpio.write(24, true, function(err) {
        if (err) throw err;
        console.log('Pin 24 on!');
    });
}
function off24() {
    gpio.write(24, false, function(err) {
        if (err) throw err;
        console.log('Pin 24 off!');
    });
}

function on26() {
    gpio.write(26, true, function(err) {
        if (err) throw err;
        console.log('Pin 26 on!');
    });
}
function off26() {
    gpio.write(26, false, function(err) {
        if (err) throw err;
        console.log('Pin 26 off!');
    });
}


//Initialize
gpio.setup(3, gpio.DIR_OUT, on3);
gpio.setup(5, gpio.DIR_OUT, off5);
gpio.setup(7, gpio.DIR_OUT, off7);
gpio.setup(8, gpio.DIR_OUT, on8);
gpio.setup(10, gpio.DIR_OUT, off10);
gpio.setup(12, gpio.DIR_OUT, off12);
gpio.setup(11, gpio.DIR_OUT, on11);
gpio.setup(13, gpio.DIR_OUT, off13);
gpio.setup(15, gpio.DIR_OUT, off15);
gpio.setup(22, gpio.DIR_OUT, on22);
gpio.setup(24, gpio.DIR_OUT, off24);
gpio.setup(26, gpio.DIR_OUT, off26);

//Signal functions
function norOp(){
 x = setInterval(function(){
  a = setTimeout(function(){
        gpio.setup(3, gpio.DIR_OUT, off3);
        gpio.setup(7, gpio.DIR_OUT, on7);
        gpio.setup(24, gpio.DIR_OUT, off24);
        gpio.setup(22, gpio.DIR_OUT, on22);
     },1000);
  b = setTimeout(function(){
        gpio.setup(5, gpio.DIR_OUT, on5);
        gpio.setup(7, gpio.DIR_OUT, off7);
  },5000);
  c = setTimeout(function(){
      gpio.setup(3, gpio.DIR_OUT, on3);
      gpio.setup(5, gpio.DIR_OUT, off5);
      gpio.setup(12, gpio.DIR_OUT, on12);
      gpio.setup(8, gpio.DIR_OUT, off8);     
  },6000);
  d = setTimeout(function(){
      gpio.setup(10, gpio.DIR_OUT, on10);
      gpio.setup(12, gpio.DIR_OUT, off12);    
  },10000)
  e = setTimeout(function(){
      gpio.setup(8, gpio.DIR_OUT, on8);
      gpio.setup(10, gpio.DIR_OUT, off10);
      gpio.setup(15, gpio.DIR_OUT, on15);
      gpio.setup(11, gpio.DIR_OUT, off11);
  },11000)
  f = setTimeout(function(){
      gpio.setup(13, gpio.DIR_OUT, on13);
      gpio.setup(15, gpio.DIR_OUT, off15);    
  },15000)
  g = setTimeout(function(){
      gpio.setup(11, gpio.DIR_OUT, on11);
      gpio.setup(13, gpio.DIR_OUT, off13);
      gpio.setup(26, gpio.DIR_OUT, on26);
      gpio.setup(22, gpio.DIR_OUT, off22);  
  },16000)
  h = setTimeout(function(){
      gpio.setup(24, gpio.DIR_OUT, on24);
      gpio.setup(26, gpio.DIR_OUT, off26);
  },20000)
  },20000);
}

function emerOp(){
    clearInterval(x);
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    clearTimeout(d);
    clearTimeout(e);
    clearTimeout(f);
    clearTimeout(g);
    clearTimeout(h);
    gpio.setup(15, gpio.DIR_OUT, off15);
    gpio.setup(16, gpio.DIR_OUT, on16);
    setTimeout(function(){
        norOp();
    },15000);
}

norOp();





//Socket
socket.on('connect', function (){
    console.log("socket connected"); 
});

setInterval(function(){
   socket.emit('test',"Lights Operating");
},1000)


socket.on('EVP',function(msg){
        emerOp();
        console.log('emergency started!');
        console.log(msg)
})

socket.on(np,function(){
      norOp();
 })


server.listen(function(){
    console.log('Server started!');
})