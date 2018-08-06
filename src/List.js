import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTodos, deleteTodo, completeTodo } from "./actions";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class TodoList extends Component {
	componentDidMount() {
		this.props.getTodos();
	}

	deleteTask = id => {
		this.props.deleteTodo(id);
	};

	completeTask = id => {
		this.props.completeTodo(id);
	};

	viewTask = id => {
		window.location = `/todo/${id}`;
	};

	render() {
		const { tasks = [] } = this.props;
		return (
			<div>
				<Grid item xs={12} md={12}>
					<Typography variant="title">Todo List</Typography>
					<Paper className="mt10">
						<Table>
							<TableBody>
								{tasks.map(task => {
									return (
										<TableRow
											style={{
												backgroundColor: task.completed ? "#efefef" : "#fff"
											}}
											key={task.id}>
											<TableCell component="th" scope="row">
												<Button
													disabled={task.completed}
													href={`/todo/${task.id}`}>
													{task.title}
												</Button>
											</TableCell>
											<TableCell numeric>
												<Button
													onClick={e => this.completeTask(task.id)}
													color="primary"
													disabled={task.completed}>
													Complete
												</Button>
											</TableCell>
											<TableCell numeric>
												<IconButton
													onClick={e => this.deleteTask(task.id)}
													aria-label="Delete">
													<DeleteIcon />
												</IconButton>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</Paper>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => ({ tasks: state.todoReducer.tasks });

const mapDispatchToProps = dispatch =>
	bindActionCreators({ getTodos, deleteTodo, completeTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
