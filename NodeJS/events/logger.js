const EventEmitter = require('events');

class Logger extends EventEmitter{
  log(mgs){
    console.log(msg,' is loggign')
    this.emit('logMessage', {id:1, url:'http://blog.com'});
    this.emit('logging',{data:'Event is happening'});
  }
}

module.exports = Logger