// 1. <input> 태그 안의 값을 잡는다.
const button = document.querySelector('#js-button');
const inputArea =  document.querySelector('#js-input');
const resultArea = document.querySelector('#result-area');

button.addEventListener('click',() =>{
  searchAndPush(inputArea.value);
});

inputArea.addEventListener('keyup', (e)=>{
  if(e.which === 13) pushToDOM(inputArea.value);
});

const searchAndPush = (keyword) => {
// 2. API 를 활용해서 data를 받고 가공한다.
const API_KEY = 'Wq16sGdb2R7IR5v7ipsPKvx7G5yk7S54'
// let keyword = '한국';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`
console.log(URL);
  // Ajax request
const GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', URL);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',(e) =>{
  const rawData = e.target.response;
  console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbb')
  console.log(rawData);
  const parsedData = JSON.parse(rawData);
  console.log(parsedData)
  pushToDOM(parsedData);
})
}
// 3. GIF 파일들을 index.html에 밀어 넣는다.
const pushToDOM = (parsedData) => {
  resultArea.innerHTML = null;
  const DataSet = parsedData.data;
  console.log(DataSet)
  console.log('zzzzzzzzzzzzzzzzzzzzzz'+parsedData)
  console.log(parsedData)
  let i = 0;
  DataSet.forEach((imageData) =>{
    let imgURL = imageData.images.fixed_height.url;
    resultArea.innerHTML += `<img src="${imgURL}" alt='${imageData.title}' />`
  })
  // console.log(parsedData.data[0].images.fixed_height.url);
  
  // let img_URL = parsedData.data[0].images
  // let img_URL = parsedData.data[0].images.fixed_height.url
  // resultArea.innerHTML = `<img src="${img_URL}" alt='smile' />`
  // resultArea.innerHTML = data;
  // console.log(img_URL);
  // document.write(data); 다 지워지면 의도했던바가 아님.
  // alert(data);
}