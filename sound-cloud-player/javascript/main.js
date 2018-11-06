/* 1. 검색 */

/* 2. SoundCloud API  사용하기 */
const SoundCloudAPI = {
  init: () => {
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },

  getTrack: inputValue => {
    SC.get("/tracks", {
      q: inputValue,
      license: ""
    }).then(function(tracks) {
      console.log(tracks);
      SoundCloudAPI.renderTracks(tracks);
    });
  }
};

SoundCloudAPI.init();
SoundCloudAPI.getTrack("busker");
// find all sounds of buskers licensed under 'creative commons share alike'

/* 3. 카드 보여주기 */
SoundCloudAPI.renderTracks = (tracks) => {
  tracks.forEach((track) => {
    // Card
    const card = document.createElement("div");
    card.classList.add("card");
    // class.List.add는 클래스 추가, createElement는 태그 생성.
    console.log(card);

    // Image
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    const imageImg = document.createElement("img");
    imageImg.classList.add("image_img");
    imageImg.src = (track.artwork_url || "http://lorempixel.com/100/100/abstract/");

    imageDiv.appendChild(imageImg);
    

    // Content
    const content = document.createElement("div");
    content.classList.add("content");

    const header = document.createElement("div");
    header.classList.add("header");

    const link = document.createElement("a");
    link.href = track.permalink_url;
    link.target = "_blank";//new tab
    link.innerHTML = track.title;

    // Button
    const button = document.createElement("div");
    button.classList.add("ui", "bottom", "attached", "button", "js-button");

    const icon = document.createElement("i");
    icon.classList.add("add", "icon");

    const buttonText = document.createElement("span");
    buttonText.innerHTML = "Add to Playlist";

    // 조립
    imageDiv.appendChild(imageImg);

    header.appendChild(link);
    content.appendChild(header);

    button.appendChild(icon);
    button.appendChild(buttonText);

    card.appendChild(imageDiv);
    card.appendChild(content);
    card.appendChild(button);

    const searchResults = document.querySelector("#js-search-results");
    searchResults.appendChild(card);
  });
};

/* 4. Playlist 에 추가하고 실제로 재생하기 */
SC.oEmbed('http://soundcloud.com/forss/flickermood', {
  auto_play: true
}).then(function(embed){
  console.log('oEmbed response: ', embed);
});
