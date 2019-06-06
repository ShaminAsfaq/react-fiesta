import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import randomWord from 'random-word-by-length';


class App extends React.Component {

	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		const rword = randomWord();
		console.log('Randomly searching for:', rword);
		this.onSearchSubmit(rword);
	}

	onSearchSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	}

	render() {
		return (
			<div>
				<div className='ui container' style={{marginTop: '5px'}}>
					<SearchBar handleFormSubmit={this.onSearchSubmit}/>

					<div className="ui grid">
						<div className="ui row">
							<div className="eleven wide column">
								<VideoDetails video={this.state.selectedVideo} />
							</div>

							<div className="five wide column">
								<VideoList 
									onVideoSelect={this.onVideoSelect} 
									videos={this.state.videos}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;