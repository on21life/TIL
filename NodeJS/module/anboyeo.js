
module.exports = {
  sayHelloInKorean(){
    return '안녕'
  },
  
  sayHelloInEnglish(){
    return 'Hello'
  },
  
  sayHelloInGalego(){
    return 'Adios'
  },
};

// 아래처럼 분류하거나 위처럼 한꺼번에 담아서 보내거나 두가지 방법이 있음.
// exports.sayHelloInKorean = () => {
//   return '안녕'
// }

// exports.sayHelloInEnglish = () => {
//   return 'Hello'
// }

// exports.sayHelloInGalego = () => {
//   return 'Adios'
// }