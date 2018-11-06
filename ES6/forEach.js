// ES5 for()

var colors = ['red', 'blue', 'green'];

for (var i=0; i<colors.length; i++){
  console.log(colors[i]);
}

// ES6 forEach()
colors.forEach(function(color){
  console.log(color);
})

var numbers = [1,2,3,4,5];
var sum = 0;

numbers.forEach(function(number){
  sum = sum + number;
  console.log(sum)
})

function add (number){
  sum = sum + number;
  console.log(sum)
}

numbers.forEach(add);

// In real use in working project

spamMails = [];
function deleteMail(){};
spamMails.foreEach(function(spamMail){
  deleteMail(spamMail);
})

// 실습1
var posts = [
  {id:23, title:'Daily'},
  {id:52, title:'Code'},
  {id:105, title:'Ruby'}
]
posts.forEach(function(post){
  console.log(post.id, post.title)
})

// 실습2 면적만 사용해서 계산
var images = [
  {height: 10, width:30},
  {height: 20, width:90},
  {height: 54, width:32},
];

var areas = [];
images.forEach(function(image){
  areas.push(image.height * image.width);
  console.log(image.height * image.width)
})


