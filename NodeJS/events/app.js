const EventEmitter = require('events');
const Logger = require('./logger')
const logger = new Logger()

// 리스너 등록
logger.on('logMessage', (arg) => {
  console.log('Listener 호출', arg);
});

logger.on('logging', (arg) =>{
  console.log(arg.data);
});

logger.emit('logMessage');
