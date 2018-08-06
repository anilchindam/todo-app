import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

class Todo extends Component {
	render() {
		return (
			<div className="container">
				<Form />
				<List />
			</div>
		);
	}
}

export default Todo;
