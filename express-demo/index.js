const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('Happy Hacking')
});

app.get('/api',(req,res)=>{
  const data ={
    ceo:'john',
    director:'neo',
    intern: 'js',
    partner: 'tak',
  };
  res.send(data);
})

// 앞의 값이 있으면 앞에것을 쓰고 없으면 뒤에거 쓴다.
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}..............`))