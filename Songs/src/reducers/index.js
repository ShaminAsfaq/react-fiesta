import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Everything I do', duration: '7:13' },
		{ title: 'Take me home, country roads', duration: '3:45' },
		{ title: 'Leaving on a jet plane', duration: '4:02' },
		{ title: 'Shake it off', duration: '4:21' },
		{ title: 'Wolven Storm', duration: '3:23' }
	];
};


const selectedSongReducer = (selectedSong=null, action) => {
	if(action.type==='SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};


export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});


