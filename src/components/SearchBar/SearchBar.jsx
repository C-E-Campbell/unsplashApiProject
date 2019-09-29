import React from "react";

class SearchBar extends React.Component {
	constructor() {
		super();
		this.onFormSubmit = this.onFormSubmit.bind(this); // OR USE ARROW FUNCTION TO BEGIN WITH - IT BINDS THE THIS KEYWORD
		this.state = {
			input: ""
		};
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.input);
	}

	render() {
		return (
			<div className=' ui segment'>
				<form className=' ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label htmlFor='searchbarinput'>Image Search</label>
						<input
							value={this.state.input}
							onChange={e => {
								this.setState({ input: e.target.value });
							}}
							placeholder='Search'
							type='text'
							id='searchbarinput'
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
