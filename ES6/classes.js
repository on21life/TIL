// ES5 something like class
// function Car(options){
//   this.title = options.title;
// }

// Car.prototype.drive = function() {
//   return 'Vroom';
// }

// var car = new Car({ title: 'Genesis'});

// ES6
class Car {
  // constructor(options){
  //   this.title = options.title;
  // }
  constructor({title}){
    this.title = options.title;
  }

  drive() {
    return 'Vroom';
  }
}

class Audi extends Car {
  constructor(options){
    super(options);
    this.color = options.color;
  }

  honk(){
    return '빵빵';
  }
}

const car = new Car({ title:'A6'})
console.log(car)

// 실습 1 - RPG게임 개발중..
// Monster 클래스의 instance는 생성될 때 health 가 100 이다.
// constructor() 는 options 라는 object를 인자로 받으며, name key 를 가진다.
// Monster 의 instance 에게 name 을 선언하자.
class Monster{
  constructor(options){
    this.health = 100;
    this.name = options.name;
  }
}

// 실습 2
// Monster 클래스 의 subclass Snake 클래스를 생성하자
// 생성자함수는 Monster와 똑같다. options 를 받는다.
// Snake 클래스는 bite() 메서드를 갖는다. 인자는 다른 Monster의 객체
// bite() 를 통과한 다른 Snake 인스턴스는 체력(health) 가 10 깎인다.
class Pickachu extends Monster{
  constructor(options){
    super(options);
  }

  bite(monster){
    monster.health -= 10;
  }
}

const jobmob = new Monster({name: '꼬렛'});
const Pickachu = new Pickachu({name:'데드풀'})

Pickachu.bite(jobmob);
console.log(jobmob);
console.log(Pickachu);