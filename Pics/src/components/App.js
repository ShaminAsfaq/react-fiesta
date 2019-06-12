import React from 'react';
import Unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

	state = { images: [] };

	onSearch = async (term) => {
		const response = await Unsplash.get('/search/photos', {
			params: { query: term }
		});
		this.setState({ images: response.data.results });
	}

	render(){
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar handleEnter={ this.onSearch }/>
				Found: {this.state.images.length}
				<ImageList images={ this.state.images } />
			</div>
		);
	}
};

export default App;


