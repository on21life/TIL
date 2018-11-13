const http = require('http');
const _ = require('underscore')
const numbers = _.range(1,46);
let myNumbers = _.sample(numbers, 6)
function getLottoNumber(drwNo){
  const url = `http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`
  let lottoData = {};

  return new Promise((resolve,reject)=>{
    
    // console.log(http)
    http.get(url, res =>{
      let buff = '';
      res.on('data', chunk => {
        buff += chunk;
      });
      
      res.on('end', () => {
        lottoData = JSON.parse(buff);
        console.log(lottoData)
        resolve(lottoData)
      });
    });
  });
  }
//
// 
// function fundLuckNumbers(lottoData={}){
//   for( const [key, value] of Object.entries(lottoData)){
//     console.log(`${key} : ${value}`);
//   }
// }
let num = 0;
let totalnum = 0;
  getLottoNumber(800)
  .then(lottoData => {
    let realNumbers = [];
    
    realNumbers.push(lottoData.drwtNo1)
    realNumbers.push(lottoData.drwtNo2)
    realNumbers.push(lottoData.drwtNo3)
    realNumbers.push(lottoData.drwtNo4)
    realNumbers.push(lottoData.drwtNo5)
    realNumbers.push(lottoData.drwtNo6)


    // console.log(myNumbers)
    // console.log(myNumbers.pop())
    // console.log(myNumbers)
    while(num < 6){
      myNumbers = _.sample(numbers, 6)
      num = 0;
      totalnum += 1;
    realNumbers.forEach(element1 => {
      myNumbers.find(element2 => {
        if(element1 === element2){
          // console.log(element2)
          num += 1;
        }
      })
    });

  // console.log(num)
  }
  console.log(`${totalnum}번째 구매`)
  console.log(`${num}개 맞춤`)
  });

  // getLottoNumber(800).then(lottoData => findLuckyNumbers(lottoData));
  // const luckyNumbers ={
    //   // bnusNo :?,
    //   drwNo:[1,2,3,4,5,6]
    // }
// myNumbers.forEach(element => {
//   console.log(element)
// });

// function fundLuckNumbers(lottoData={}){
//   for( const [key, value] of Object.entries(lottoData)){
//     console.log(`${key} : ${value}`);
//   }
// }
// console.log(luckyNumbers);