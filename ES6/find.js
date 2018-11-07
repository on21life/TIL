// ES5 for()
var users = [{ name: "Tony St" }, { name: "Steve Rogers" }, { name: "Thor" }];
var user;

for (var i = 0; i < user.length; i++) {
  if (users[i].name === "Thor") {
    user = users[i];
    break; //다 돌 필요 없음.
  }
}

// ES6 find()
var user = users.find(function(user) {
  return user.name === "Tony St";
});
// 하나 찾으면 끝.

var user = users.find();
console.log(user);

// More complex code
function Car(model) {
  this.model = model;
}

var cars = [
  new Car("Mercedes"),
  new Car("Ferrari"),
  new Car("BMW"),
  new Car("HK")
];

var car = cars.find(function(car) {
  return car.model === "HK";
});

// 실제로는
const articles = [
  { id: 1, title: "Motto", content: "HappyHacking" },
  { id: 2, title: "My presonal Info", content: "HappyHacking" },
  { id: 3, title: "Ruby vs Python", content: "HappyHacking" },
  { id: 4, title: "Welcome to the", content: "HappyHacking" }
];

const articleId = getIdFromURL();

// 실습1
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];
var admin;

admin = users.find(function(user) {
  return user.admin;
});
console.log(admin);

// 실습 2
// 잔액이 12인 계좌를 account에 저장.
var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function(account) {
  return account.balance === 12;
});

// 실습3
var laders = [{ id: 1, height: 20 }, { id: 3, height: 25 }];

function findwhere(array, standard) {
  // 채우기
  if (Object.keys(standard) === ["height"])
    var seeit = array.find(function(lader) {
      return lader.height === standard.height;
    });
  else if (Object.keys(standard) === ["id"])
    var seeit = array.find(function(lader) {
      return lader.height === standard.height;
    });
  console.log(Object.keys(standard));
  console.log(seeit);
}

// object.keys()
findwhere(laders, { height: 20 });
findwhere(laders, { id: 3 });
