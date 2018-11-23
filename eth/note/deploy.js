// deploy
// web3: ethereum interact
// HDWalletProvider : 12words -> private

const HDWalletProvider = require('truffle-hdwallet');
const Web3 = require('web3');

// 배포를 위한 컨트랙 컴파일 결과물
const {bytecode, interface} = require('./compile')

const provider = new HDWalletProvider(
  // '본인 계정의 12개의 mnmonic words',
  'modify volume insect balance ahead pear dirt bread velvet modify eagle fiscal',
  // 'infura URL'
  'https://ropsten.infura.io/v3/71f55c2c1b6345ce91c26a14811edeb4'
)

const web3= new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(accounts);
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({date: '0x' + bytecode, arguments:["Happy"]}).send({from: accounts[0], gas: '1000000', gasPrice: web3.utils.toWei('0.1','gwei')})
  // web3.eth.Contract(JSON.parse(interface))
  // .deploy('{바이트코드, 생성자 관련 인자}').send('누구로부터, 수수료')
  console.log(result, options.address);
}

deploy();