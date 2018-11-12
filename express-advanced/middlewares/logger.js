function log(req,res,next){
  console.log('모든 요청이 올때마다 로그를 남깁니다.')
  // 넥스트는 미들웨어의 진행을 다음으로 넘기는것.
  next();
}

module.exports = log;