// Action Creator
// export beacause we might have to export several function from this file.
export const selectSong = (song) => {
    return {
        type : "SELECTED_SONG",
        payload : song
    };
};