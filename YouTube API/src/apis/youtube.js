import axios from 'axios';
const KEY = 'AIzaSyD0ddB7NMIkjEcejcmbBiVfqaeM9MFAG-A';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
})