const express = require('express')
const app = module.exports = express()
const server = app.listen(3000)
const gpio = require('rpi-gpio')
 
gpio.setup(15, gpio.DIR_OUT, write15);
 
function write15() {
    gpio.write(15, false, function(err) {
        if (err) throw err;
        console.log('Pin 15 reset!');
    });
}


gpio.setup(16, gpio.DIR_OUT, write16);

function write16() {
    gpio.write(16, false, function(err) {
        if (err) throw err;
        console.log('Pin 16 reset!');
    });
}

server.listen(function(){
    console.log('Server started!');
})
