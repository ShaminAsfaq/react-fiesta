import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };
	handleChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.handleFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={ this.onFormSubmit } className="ui form">
					<div className="field">
						<label>YouTube Search</label>
						<input 
							type="text" 
							value={ this.state.term }
							onChange={ this.handleChange }
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;