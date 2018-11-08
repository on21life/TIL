// ES5

var name = '윤석현';
var title = 'Junior'
var workHour = '9 am to 6 pm';

function count(targetString){
  var characters = ['a','e','i','o','u'];
  var number = 0;

  for(var i=0;i<targetString.length;i++){
    if(characters.includes(targetString[i])){
      number++;
    }
  }
  return number;
}

// ES6
const name ='유태영';
let title = 'Junior';
let workHour = '1pm to 6pm'

function count(targetString){
  const characters = ['a','e','i','o','u'];
  const number = targetString.split('').reduce(function(acc, char){
    if(characters.includes(char)){
      acc++
    }
    return acc;
  },0);
  return number;
}

// facaebook
let age =100;
let name ='You';
const dateOfBirth ='0101';

// Refactor
const status = [
  {code:'OK'}
]