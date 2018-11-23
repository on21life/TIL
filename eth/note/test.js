// mocha ===> truffle default test framework
// TDD : Test Driven Day
// 1.테스트 먼저짜고 == 내가 구현할 기능
// 2. 테스트를 돌린다
// 3.
// 4.
// 5.

const assert = require("assert");

class Car {
  park() {
    return "주차";
  }
  drive() {
    return "붕붕";
  }
  fly() {
    return "날아라";
  }
  swim() {
    return "수영수영"
  }
}

let car = new Car();

// it 안에 new Car() 대신에 이렇게 해줘도 됨.
beforeEach(() => {
  car = new Car();

})

// 내가 어떤 모듈을 테스트 할건지: Car(주어)
describe("Car 클래스는", () => {
  //  그 모듈이 뭘 하는건지 : drive(), park() (동사)
  it("주차가 가능하다.", () => {
    // const car = new Car();
    assert.equal(car.park(), "주차");
  });

  it("운전 가능하다", () => {
    // const car = new Car();
    assert.equal(car.drive(), "붕붕");
  });

  it("날아갈 수 있다.", () => {
    assert.equal(car.fly(), "날아라");
  });

  it("수륙 양용 이다.", () => {
    assert.equal(car.swim(), "수영수영");
  });
});
