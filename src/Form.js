import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTodos, createTodo } from "./actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ""
		};
	}

	onChange = e => {
		this.setState({
			task: e.target.value
		});
	};

	create = () => {
		this.props.createTodo(this.state.task);
		this.setState({
			task: ""
		});
	};

	render() {
		const { task } = this.state;
		return (
			<div className="form mb10">
				<Card>
					<CardContent>
						<Typography color="textSecondary">
							<strong>Enter Task below</strong>
						</Typography>
						<TextField
							placeholder="enter task here"
							value={task}
							autoFocus={true}
							onChange={this.onChange}
							margin="normal"
							fullWidth
						/>
					</CardContent>
					<CardActions>
						<Button
							onClick={this.create}
							disabled={!task}
							variant="raised"
							color="primary">
							Create Task
						</Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = state => ({ message: state.todoReducer.message });

const mapDispatchToProps = dispatch =>
	bindActionCreators({ getTodos, createTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
