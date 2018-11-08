const os = require('os');

//기본인 바이트 단위 출력을 메가바이트 단위로 출력
const totalMemory = os.totalmem() / 1024/1024;
const freeMemory = os.freemem() /1024/1024;

console.log("Total Memory:" + totalMemory);
console.log(`Free Memory: ${freeMemory}`);

