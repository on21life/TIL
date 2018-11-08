// Rest 나머지
const addNumbers = (a, b) => {
  const numbers = [a, b];
  return numbers.reduce((acc, number) => {
    return (acc += number);
  }, 0);
};

const addAll = (...numbers) => {
  return numbers.reduce((acc, number) => {
    return (acc += number);
  }, 0);
};

addAll(12,32,231,43,34,2);
// spread
let defaulteColor = ['red','navy','yellow']
let myColors = ['black','black','gold']
let iphoneColors = ['black','black','gold']
let palette = defaulteColor.concat(myColors);
palette = [...defaulteColor, ...myColors, ...iphoneColors]

// 실습
const showShoppingList = (...items) =>{
  if(items.indexOf('milk' < 0)){
    return ['milk', ...items]
  }
}

// 실제 개발에서
const MathLibrary = {
  caculateProduct(a,b){
    return a*b;
  }
}

MathLibrary = {
  multiply(a,b){
    return a*b;
  },

  calculateProduct(...args){
    console.log('Please use method "multiplay" instead :)');
    return this.multyply(...args)
  }
}

MathLibrary.calculateProduct(10,10)

// 실습
const join = (array1, array2) => {
  return array1.concat(array2);
};

const join =(array1, array2) =>{
  return [...array1, ...array2]
}

const unshift = (array,a,b,c,d,e) => {
  return [a,b,c,d,e].concat(array);
};

const unshift = (...array, ...args) => {
  return [...args, ...array];
}