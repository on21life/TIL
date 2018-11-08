// ES5
function amkeRequest(url, method) {
  if(!method){
    method = 'GET';
  }
  doSomeThing(method, url);
}

makeRequest('http://hphk.io');
makeRequest('http://hphk.io');
makeRequest('http://hphk.io');
// ES6
function makeRequest2(method='GET',url) {
  doSomeThing(method, url);
}

// 실습
function sum(a,b){
  if(a === undefined){
    a = 0;
  }

  if(b === undefined){
    b = 0;
  }

  return a+b;
}
const sum = (a=0,b=0) => a+b;

function addOffset(){
  
}