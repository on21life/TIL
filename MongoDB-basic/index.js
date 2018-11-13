const mongoose = require('mongoose')

// 몽구스로 몽고디비 연결.
mongoose.connect('mongodb://localhost/hello-mongo', { useNewUrlParser:true})
  .then(() => console.log('connected to mongoDB'))
  .catch(error => console.error(error.message));

//가용 스키마 데이터타입:
// String, Number, Date, Buffer, Boolean, ObjectID, Array
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: ['nodejs', 'backend', ''],
  date: {type:Date, default:Date.now},
  isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)
// CRUD Operation
const course = new Course({
  name: '실전 DApp 빌드하기',
  author: 'john',
  tags:['Ethereum', 'Blockchain', 'DApp'],
  isPublished: false
})

// save는 커밋과 유사함.
course.save()
  .then(result => console.log(result))
  .catch(error => console.error(error));


  uses = [
  {id:1, name:'neo1', email:'on21@naver.com1'},
  {id:2, name:'neo2', email:'on21@naver.com2'},
  {id:3, name:'neo3', email:'on21@naver.com3'},
]

// npm i mongoose
