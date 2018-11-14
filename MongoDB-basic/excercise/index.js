const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/exercise-basic', { useNewUrlParser:true})
.then(()=>console.log('Connexted to MongoDB'))
.catch(error => console.error(error.message))

const mySchema3 = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
  price: Number,
})

// 'Course' 로 이미 생성된 모델명을 매칭시키고 mySchema3 의 몽구스의 스키마를 기준으로 집어넣거나 검사한다.
//  그래서 mySchema에 아무것도 없으면 검사 혹은 생성을 못한다. 
const Course = mongoose.model('Course', mySchema3)

async function getEx1(){
  const courses = await Course
    .find({ isPublished: true, tags: 'backend' }) // publish 된 course 들 중에서 backend 코스인 것들을,
    .sort({ name: 1 }) // 이름 오름차순으로 정렬하고,
    .select({ name: 1, author: 1 }) // name 과 author 만을,

  console.log(courses) // 출력!
}

async function getEx2(){
  const courses = await Course
    .find({ isPublished: true }) // publish 된 course 들 중에서
    .or([{ tags: 'frontend' }, { tags: 'backend' }]) // backend 와 frontend 모두를
    .sort('-price') // price 내림차순으로,
    .select('name price') // name 과 price 만

  console.log(courses); // 출력!
}

async function getEx3(){
  const courses = await Course
  .find()// 모든 course 들 중에서
  .or([
    { price: { $gte: 15 } }, // price 15 이상이거나,
    { name: /.*js.*/i }, // name 에 대소문자 구분없이 'js' 가 들어간 강의들을,
  ])

  console.log(courses)// 출력해보자구!
}
