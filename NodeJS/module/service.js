
// 노드에서 제공해주는 코어모듈
const fs = require('fs')
// npm 에서 다운받은 모듈
// const express = require('express')
// 내 로컬 컴퓨터 경로에서 가져오는 모듈
const sum = require('./utility')
// 파일이 없으면 동일한 이름의 폴더로 가서 폴더명/index.js 를 접근.
// const routes = require('./routes')
// const dbconfig = require('./configs/database.json')


// 불러오는 모듈명이 test가 아니라 Test 처럼 대문자로 시작하면 클래스라는 컨벤션 이라서 생성자를 바로 뽑아주는게 좋다.

const total = sum([100,200,300])

console.log(sum)