/* ES5 for() */
var computers = [
  { name: 'macbook-air', ram: 16},
  { name: 'gram', ram: 8},
  { name: 'series9', ram: 32}
]

var everyComputersAvailable = true;
var someComputerAvailable = false;

for(var i=0; i < computers.length; i++){
  var computer = computers[i];

  if(computer.ram < 16){
    everyComputersAvailable = false;
  } else {
    someComputerAvailable = true;
  }
}

/* ES6 every & some */
// (computer[0] 16) && &&
var everyLaptopAvailable = computers.every(function(computer){
  return computer.ram > 16;
})

// || ||
var someLaptopAvailable = computers.some(function(computer){
  return computer.ram > 16;
})

var names = [

  'alex',
  'bill',
  'chris',

]

name.every(function(name){
  return name.length >4;
})//false

// name.some(function())

/* 실제로는? */

/* 실습 1 */
var users = [
  {id:21, submit: true},
  {id:31, submit: false},
  {id:21241, submit: true},
];

var allSubmitted = users.every(function(user){
  return user.submit;
})


/* 실습 2 */
// status에 pending 하나라도 있으면 inProgress = true
var requests = [
  {url: '/photos', statuts:'complete'},
  {url: '/photos', statuts:'pending'},
  {url: '/photos', statuts:'complete'},
]

var inProgress = requests.some(function(request){
  return req.status === 'pending'  
})

/* 실습 3 */