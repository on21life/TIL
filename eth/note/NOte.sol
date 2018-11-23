pragma solidity ^0.4.25;
// deploy
// web3: 
// 
const HDwallet = require('truffle-hdwallet-provider');
const Web3 = require('web3');

// 배포를 위한 컨트랙 컴파일 결과물
const note = require('')
contract Note{
    
    string public note;
    
    
    constructor(string _input) public 
    {
        note = _input;
    }
    
    function writeNote(string _input) public
    {
        note = _input;
    }
    
}