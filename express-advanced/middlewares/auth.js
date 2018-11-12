function auth(req, res, next){
  console.log('사용자 인증을 진행중')
  next()
}

module.exports = auth