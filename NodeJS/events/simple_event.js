const EventEmitter = require('events');

class Job extends EventEmitter{}

const job = new Job()

//job. 이하를 이벤트리스너라고 함.
job.on('warning',(season) =>{
  console.log(`${season} is coming...`);
});

job.emit('warning','winter')