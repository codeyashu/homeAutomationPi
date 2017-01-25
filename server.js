'use strict';
const express = require('express')
const app = module.exports = express()
const server = app.listen(3000)
const io = require('socket.io').listen(server)
const gpio = require('rpi-gpio')


//event names
const addDevice = "EVENT_ADD_DEVICE"
const removeDevice = "EVENT_REMOVE_DEVICE"
const switchOn = "EVENT_ON"
const switchOff = "EVENT_OFF"
const deviceList = "EVENT_DEVICE_LIST" 


var i = 0;
var j = 0;
var idarr = [7,8,10,11,12] //gpio pins
var pinarr = [] //pin number and status
var devicearr = []  //list of devices

function initPins(idarr){
    for(let k = 0; k < idarr.length; k++){
       pinarr[k] = {num:idarr[k], status:false}
    }
    console.dir(pinarr)
}
initPins(idarr)

class device {
  constructor(dInfo){
    for(let k = 0; k < pinarr.length; k++){
      if(pinarr[k].status === false){
          this.ID = pinarr[k].num
          pinarr[k].status = true
          console.dir(pinarr)
          break;
      }
    } 
    this.NAME = dInfo.NAME
    this.TYPE = dInfo.TYPE
    i++;
  }    
}

function deviceRemove(dId){
  for(let k = 0; k < devicearr.length; k++){
    if(devicearr[k].ID === dId.ID){
      devicearr.splice(k,1) 
      j--;
    }
  }
  for(let k = 0; k < pinarr.length; k++){
    if(pinarr[k].num === dId.ID){
      pinarr[k].status = false
    }
  }
}

var temp;
 
function write1() {
    gpio.write(temp, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}
function write2() {
    gpio.write(temp, false, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}


io.on('connection',function(socket){
    console.log("Client connected")
     
    socket.on('disconnect',function(){
        console.log('Client Disconnected')
    })

    socket.emit(deviceList,devicearr);

    socket.on(deviceList,function(){
      socket.emit(deviceList,devicearr)
    })

    socket.on(addDevice,function(dInfo){ 
        devicearr[j] = new device(JSON.parse(dInfo));
        console.log("new device added")
        console.dir(devicearr[j])
        j++;    
    })

    socket.on(removeDevice,function(dId){
        deviceRemove(JSON.parse(dId));
        console.log("device "+dId+" removed")
    })

    socket.on(switchOn,function(dId){
        console.log(dId)
        dId = JSON.parse(dId)
        console.log(dId.ID)
        temp = dId.ID
        console.log("setup pin no : " + temp)
        gpio.setup(temp, gpio.DIR_OUT, write1);
    })

    socket.on(switchOff,function(dId){
        console.log(dId)
        dId = JSON.parse(dId)
        console.log(dId.ID)
        temp = dId.ID
        gpio.setup(temp, gpio.DIR_OUT, write2);
    })
})

server.listen(function(){
    console.log('Server started!');
})