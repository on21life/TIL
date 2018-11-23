const assert = require('assert');
const Web3 = require("web3");
const ganache = require('ganache-cli');
const {bytecode, interface} = require('./compile')


const web3 = new web3(ganache.provider());


let accounts;
let note;

beforeEach(async() => {
  const accounts = await web3.eth.getAccounts();

note = await new web3.eth.Contract(JSON.parse(interface))
.deploy({data:'0x' + bytecode, argument:['Happy']})
.send({from: accounts[0]});
})

describe('Note 컨트렉트', () => {
  interface('배포가 될 수 있다', () => {
    assert.ok(note);
  })
})




// 1.ganache-cli 이더리움 가상 로컬 네트워크에 배포
// 2.배포된 코드와 interact 하면서 코드 테스트
