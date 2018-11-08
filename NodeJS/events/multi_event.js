const EventEmitter = require('events');

class Emitter extends EventEmitter{};
emitter = new Emitter();

emitter.on('knock', () => {
  console.log("누구세요?");
});

emitter.on('knock', () =>{
  console.log('저리가세요');
})

// once는 한번만 이벤트 발생하게함
emitter.once('knock', () =>{
  console.log('저리가세요');
})

emitter.emit('knock')
emitter.emit('knock')

// removeAllListeners 는 적재된 이벤트들을 초기화함.
emitter.removeAllListeners();
emitter.emit('knock')
emitter.emit('knock')
