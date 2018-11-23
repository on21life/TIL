import { combineReducers } from "redux";

const songsReducer = action => {
  return [
    { title: "1집", artist: "윤하", duration: "3분" },
    { title: "1st", artist: "black eyed piece", duration: "60minutes" },
    { title: "3집", artist: "박효신", duration: "13분" },
    { title: "명반", artist: "체리필터", duration: "20분" }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
