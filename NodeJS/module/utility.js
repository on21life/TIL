console.log('1');
// 모듈밖은 한번만 실행됨.
module.exports = function(numbersToSum=[]){
  let sum = 0;
  numbersToSum.forEach(number => sum += number);
  return sum;
};

console.log('real');
// 모듈 위아래로 무언가를 배치해놔도 그 무언가가 먼저 호출되고 모듈exports 부분은 모듈캐시를 통해 후출력된다.