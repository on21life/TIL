/* 1. 검색 */

/* 2. SoundCloud API  사용하기 */
const SoundCloudAPI = {
  init: () => {
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },

  getTrack: (inputValue) => {
    SC.get("/tracks", {
      q: inputValue,
      license: ""
    }).then(function(tracks) {
      console.log(tracks);
    });
  },
};

SoundCloudAPI.init();
SoundCloudAPI.getTrack("coffee");
// find all sounds of buskers licensed under 'creative commons share alike'

/* 3. 카드 보여주기 */
SoundCloudAPI.renderTracks = () => {
  // tracks.forEach(()=>{});
  // Card
  const card = document.createElement('div');
  card.classList.add("card");
  // class.List.add는 클래스 추가, createElement는 태그 생성.
  console.log(card);

  // Image
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('image')
  
  
  const imageImg = document.createElement('img');
  imageImg.classList.add('image_img');
  imageImg.src = 'http://www.placekitten.com/290/290';
  imageDiv.appendChild(imageImg);

  // Content
  const content = document.createElement('div');
  content.classList.add("content")

  const header = document.createElement('div');
  header.classList.add('header')

  const link = document.createElement('a');
  link.href = "http://lorempixel.com/100/100/abstract/"
  link.target = "_blank"
  link.innerHTML = "this hits"

  // Button
  const button = document.createElement('div');
  button.classList.add('ui', 'bottom','attached','button','js-button')
  
  const icon = document.createElement('i');
  icon.classList.add('add','icon');

  const buttonText = document.createElement('span');
  buttonText.innerHTML = 'Add to Playlist';


  // 조립
  imageDiv.appendChild(imageImg);

  header.appendChild(link);
  content.appendChild(header);

  button.appendChild(icon);
  button.appendChild(buttonText);

  card.appendChild(imageDiv);
  card.appendChild(content);
  card.appendChild(button);

  const searchResults = document.querySelector('#js-search-results');
  searchResults.appendChild(card);
}
let eaching = SoundCloudAPI.getTrack("coffee");
SoundCloudAPI.renderTracks();
/* 4. Playlist 에 추가하고 실제로 재생하기 */
