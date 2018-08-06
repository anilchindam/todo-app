import React, { Component } from "react";
import routes from "./routes";

class App extends Component {
	render() {
		return (
			<div className="container">
				<main>{routes}</main>
			</div>
		);
	}
}
export default App;
