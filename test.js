const express = require('express')
const app = module.exports = express()
const server = app.listen(3000)
const gpio = require('rpi-gpio')
 
gpio.setup(15, gpio.DIR_OUT, on15);
gpio.setup(16, gpio.DIR_OUT, off16);
 
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

function on16() {
    gpio.write(16, true, function(err) {
        if (err) throw err;
        console.log('Pin 16 on!');
    });
}
function off16() {
    gpio.write(16, false, function(err) {
        if (err) throw err;
        console.log('Pin 16 off!');
    });
}
x;
y;
z;
function norOp(){
  x = setInterval(function(){
  y = setTimeout(function(){
        gpio.setup(15, gpio.DIR_OUT, off15);
        gpio.setup(16, gpio.DIR_OUT, on16);
     },7000);
  z = setTimeout(function(){
        gpio.setup(15, gpio.DIR_OUT, on15);
        gpio.setup(16, gpio.DIR_OUT, off16);
     },10000);
  },20000);
}

function emerOp(){
    clearInterval(x);
    clearTimeout(y);
    clearTimeout(z);
    gpio.setup(15, gpio.DIR_OUT, off15);
    gpio.setup(16, gpio.DIR_OUT, on16);
    setTimeout(function(){
        norOp();
    },15000);
}

server.listen(function(){
    console.log('Server started!');
})
