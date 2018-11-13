// 대기 성공 실패를 꼭 알려주는것이 프로미스
const promise = new Promise((resolve,reject)=>{
  // resolve가 성공 reject가 실패
  const number = Math.floor(Math.random() * 100)
  // async 한 작업 중...
  if(number % 2 === 1){
    resolve({id:1, email:'neo@naver.com'})
  } //성공시
  else //실패시
  reject(new Error('Error...TT'))

  
});

// then은 성공했을때
promise
  .then(user => console.log(user.email))
  .catch(error => console.error(error))