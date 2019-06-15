// named export
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:05" },
        { title: "Macarena", duration: "2:30" },
        { title: "All star", duration: "3:15" },
        { title: "I want that way", duration: "1:45" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

// they have the same key
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer 
});