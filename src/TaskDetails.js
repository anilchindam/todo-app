import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTodos, deleteTodo, completeTodo, updateTodo } from "./actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class TaskDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: {}
		};
	}

	onChange = (e, key) => {
		this.setState({
			task: { ...this.state.task, [key]: e.target.value }
		});
	};

	completeTask = () => {
		this.props.completeTodo(this.props.match.params.id, true);
	};

	deleteTask = () => {
		this.props.deleteTodo(this.props.match.params.id, true);
	};

	componentDidMount() {
		this.props.getTodos();
	}

	componentWillReceiveProps(nextProps) {
		const task =
			nextProps.tasks.filter(
				task => this.props.match.params.id == task.id
			)[0] || {};
		this.setState({
			task
		});
	}

	cancel = () => {
		const task =
			this.props.tasks.filter(
				task => this.props.match.params.id == task.id
			)[0] || {};
		this.setState({
			task
		});
	};

	update = () => {
		this.props.updateTodo(this.state.task);
	};

	render() {
		const { task } = this.state;

		return (
			<div className="form">
				<Button href="/" color="primary">
					&#60; Back to Todo List
				</Button>
				<Card>
					<CardContent>
						<Grid container spacing={24}>
							<Grid item xs={12} sm={6}>
								<Typography color="textSecondary">
									<strong>Task</strong>
								</Typography>
								<TextField
									placeholder="enter task"
									value={task.title}
									autoFocus={true}
									onChange={e => this.onChange(e, "title")}
									margin="normal"
									fullWidth
								/>
							</Grid>
							<Grid item xs={4} sm={6}>
								<Button onClick={this.completeTask} variant="raised">
									Complete
								</Button>
							</Grid>
						</Grid>

						<Typography color="textSecondary">
							<strong>Description</strong>
						</Typography>
						<TextField
							placeholder="enter task description"
							multiline
							rowsMax="4"
							value={task.description}
							autoFocus={true}
							onChange={e => this.onChange(e, "description")}
							margin="normal"
							fullWidth
						/>
					</CardContent>
					<CardActions>
						<Button
							onClick={this.update}
							disabled={!task}
							variant="raised"
							color="primary">
							Save
						</Button>
						<Button onClick={this.cancel} variant="raised">
							Cancel
						</Button>
						<Button
							onClick={this.deleteTask}
							variant="raised"
							color="secondary">
							Delete
						</Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}
const mapStateToProps = state => ({ tasks: state.todoReducer.tasks });

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{ getTodos, deleteTodo, completeTodo, updateTodo },
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
