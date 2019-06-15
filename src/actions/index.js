// Action creator
const selectSongs = (song) => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export default selectSongs;
