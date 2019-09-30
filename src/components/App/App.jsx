import React from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";

class App extends React.Component {
	onSearchSubmit(input) {
		console.log(input);
	} // passed down in the props obj to be used as a callback to get the input from child to parent

	render() {
		return (
			<div className='ui container' style={{ marginTop: "2rem" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
