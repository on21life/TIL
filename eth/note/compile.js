// fs & path : NOte.sol 파일에 들어간 내용을 가져오기
const fs = require('fs');
const path = require('path');

const solc = require('solc');

// path, fs를 통해서
// const note에 Note.sol의 내용을 가져온다.
// fs.readFileSync()
const filePath = path.resolve(__dirname, 'Note.sol');
const note = fs.readFileSync(filePath, 'utf-8');

const source = solc.compile(note, 1);

// const bytecode, interface;
// const bytecode = source.contracts[':Note'].bytecode;
// const bytecode = source.contracts[':Note'].interface;
console.log(source.contracts[':Note']);

module.exports = source.contracts[':Note'];




