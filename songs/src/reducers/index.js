import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title : 'Gods plan', duration : '4:05'},
        {title : 'Alone' , duration : '3:00'},
        {title : '6 days', duration : '4:25'},
        {title : 'eastside',  duration : '1:25'}

    ];
};


const selectedSongReducer = (selectedSong=null,action) =>{
    if(action.type === "SELECTED_SONG"){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
});