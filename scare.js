const express = require('express')
const app = module.exports = express()
const server = app.listen(3000)
const gpio = require('rpi-gpio')

gpio.setup(7, gpio.DIR_OUT, write1);
  gpio.setup(8, gpio.DIR_OUT, write2);
  gpio.setup(10, gpio.DIR_OUT, write3);

  function write1() {
    gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Pin 7 reset success!');
    });
  }

  function write2() {
    gpio.write(8, true, function(err) {
        if (err) throw err;
        console.log('Pin 8 reset success!');
    });
  }

  function write3() {
    gpio.write(10, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
    });
  }



setInterval(function(){
 
  gpio.setup(7, gpio.DIR_OUT, write1);
  gpio.setup(8, gpio.DIR_OUT, write2);
  gpio.setup(10, gpio.DIR_OUT, write3);

  function write1() {   
    gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Pin 7 reset success!');
    });
  }
  
  function write2() {   
    gpio.write(8, false, function(err) {
        if (err) throw err;
        console.log('Pin 8 reset success!');
    });
  }

  function write3() {
    gpio.write(10, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
    });
  }

  setTimeout(function(){
    gpio.setup(7, gpio.DIR_OUT, write4);
    gpio.setup(8, gpio.DIR_OUT, write5);
    gpio.setup(10, gpio.DIR_OUT, write6);    
 
    function write4() {
      gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
    function write5() {
      gpio.write(8, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
    function write6() {
      gpio.write(10, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }

  },17000) 

  setTimeout(function(){
    gpio.setup(7, gpio.DIR_OUT, write7);
    gpio.setup(8, gpio.DIR_OUT, write8);
    gpio.setup(10, gpio.DIR_OUT, write9);

    function write7() {
      gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
    function write8() {
      gpio.write(8, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
    function write9() {
      gpio.write(10, true, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
      
  },24000) 

  setTimeout(function(){
    gpio.setup(7, gpio.DIR_OUT, write10);
    gpio.setup(8, gpio.DIR_OUT, write11);
    gpio.setup(10, gpio.DIR_OUT, write12);     

    function write10() {
      gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
    function write11() {
      gpio.write(8, true, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
    function write12() {
      gpio.write(10, true, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }

  },27000)

  setTimeout(function(){
    gpio.setup(7, gpio.DIR_OUT, write13);
    gpio.setup(8, gpio.DIR_OUT, write14);
    gpio.setup(10, gpio.DIR_OUT, write15);     

    function write13() {
      gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
    function write14() {
      gpio.write(8, false, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
    function write15() {
      gpio.write(10, true, function(err) {
        if (err) throw err;
        console.log('Pin 10 reset success!');
      });
    }
  },31000)

},180000)

 
server.listen(function(){
    console.log('Server started!');
})
