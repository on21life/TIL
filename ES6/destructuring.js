/* ES5 for() */
var computer = {
  model: 'LG gram',
  year: 2017,
}

// var model = computer.year;
// var year = computer.year;

/* ES6 ??? */
const laptop = {
  model: 'Macbook Air'
}

// const model = laptop.model;
const { model } = laptop;
const year = laptop.year;
// const {model, year} = laptop;
/* 실제로는? */

/* 실습 1 */

/* 실습 2 */

/* 실습 3 */



/* ES5 for() */
var savedFile ={
  extension:'jpg',
  name:'profile',
  size: 29847,
}

function fileSummary(file){
  return `The file ${file.name}.${file.extension}의 크기는 ${file.size}`
}
/* ES6 ??? */
var myFile ={
  extension:'jpg',
  name:'profile',
  size: 29847,
}

function summary({name, extension, size}){
  return `${name}.${extension} 의 크기는 ${size} 입니다.`
}

summary(myFile);
/* 실제로는? */

/* 실습 1 */

/* 실습 2 */

/* 실습 3 */



/* ES5 for() */
const companies=[
  'Google',
  'IBM',
  'Amazon',
  'Apple'
];
/* ES6 ??? */
const [name] = companies; //첫번째 것을 뽑음
console.log(name);//Google
const [name1, name2, name3] = companies;
console.log(name1, name2, name3)//Google IBM Amazon

let firstCompany = companies[0];
[firstCompany] = companies;

const {length} = companies;
console.log(length)

const [one, ...rest] =companies;
console.log(one); //하나는 문자열로
console.log(rest); //나머지는 배열로 출력
/* 실제로는? */
const wannaGo = [
  {name: 'Google', location: 'Mountatin View'},
  {name: 'Facebook', location: 'Menlo Park'},
  {name: 'Apple', location: 'Cupertino'},
]

let [company] = wannaGo;
[{location}] = wannaGo; //wannaGo[0].location
// 실제 개별에서는
const points = [
  [7,12],
  [-20,3],
  [8,0],
];

points.map(([x,y]) => {
  // const x = pair[0];
  // const y = pair[1];
  // const [x,y] = pair;
  // return {x:x, y:y};
  return {x, y};
})

function signup (username, password){
  // const user = new User
}
const user =  {
  username:'neo',
  password:'123123',

}
// signup('neo','123123')

function signup ({username, password}){
  // const user = new User
}
const user =  {
  username:'neo',
  password:'123123',

}
signup(user)

/* 실습 1 */
const profile = {
  title: 'Engineer',
  department: 'Blockchain',
}

// function isEngineer(profile){
//   var title = profile.title;
//   var department = profile.department;
//   return title === 'Engineer' &&department ==='Blockchain'
// }
function isEngineer({title,department}){
  return title === 'Engineer' && department ==='Blockchain'
}
/* 실습 2 */
const classes = [
  ['실전 DApp', '9am', 'Mr.john'],
  ['React','1pm','neo'],
  ['Capstone','3pm','multicampus']
]
// [{subject: 'React', titme:'1pm', teacher:'neo'}, {}, {}]
const classAsObject = classes.map(([subject, time, teacher ]) => {
  return {subject, time, teacher};
})

/* 실습 3 */