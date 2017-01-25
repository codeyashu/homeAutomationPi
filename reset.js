const express = require('express')
const app = module.exports = express()
const server = app.listen(3000)
const gpio = require('rpi-gpio')
 
gpio.setup(7, gpio.DIR_OUT, write7);
 
function write7() {
    gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Pin 7 reset success!');
    });
}

gpio.setup(8, gpio.DIR_OUT, write8);

function write8() {
    gpio.write(8, false, function(err) {
        if (err) throw err;
        console.log('Pin 8 reset success!');
    });
}

gpio.setup(10, gpio.DIR_OUT, write10);

function write10() {
    gpio.write(10, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
    });
}


gpio.setup(11, gpio.DIR_OUT, write11);

function write11() {
    gpio.write(11, false, function(err) {
        if (err) throw err;
        console.log('Pin 11 reset success!');
    });
}

gpio.setup(12, gpio.DIR_OUT, write12);

function write12() {
    gpio.write(12, false, function(err) {
        if (err) throw err;
        console.log('Pin 12 reset success!');
    });
}

server.listen(function(){
    console.log('Server started!');
})
