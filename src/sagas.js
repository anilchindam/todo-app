import { takeLatest, put, takeEvery, call } from "redux-saga/effects";
import { Api } from "./api";
import createHistory from "history/createBrowserHistory";
import {
	GET_TODOS_SUCCESS,
	CREATE_TODO_SUCCESS,
	DELETE_TODO_SUCCESS,
	COMPLETE_TODO_SUCCESS,
	CREATE_TODO,
	GET_TODOS,
	DELETE_TODO,
	COMPLETE_TODO,
	UPDATE_TODO
} from "./actions";

const api = new Api();
const history = createHistory({
	forceRefresh: true
});

function* getTodoList() {
	try {
		const response = yield api.getTasks();
		yield put({ type: GET_TODOS_SUCCESS, tasks: response });
	} catch (e) {}
}

function* createTodo({ title }) {
	try {
		const response = yield api.createTask(title);
		yield put({ type: CREATE_TODO_SUCCESS, tasks: response });
	} catch (e) {}
}

function* deleteTodo({ id, navigate }) {
	try {
		const response = yield api.deleteTask(id);
		yield put({ type: DELETE_TODO_SUCCESS, tasks: response });
		if (navigate) {
			yield call(history.push, "/");
		}
	} catch (e) {}
}

function* completeTodo({ id, navigate }) {
	try {
		const response = yield api.completeTask(id);
		yield put({ type: COMPLETE_TODO_SUCCESS, tasks: response });
		if (navigate) {
			yield call(history.push, "/");
		}
	} catch (e) {}
}

function* updateTodo({ task }) {
	try {
		const response = yield api.updateTask(task);
		yield call(history.push, "/");
	} catch (e) {}
}

export default function* rootSaga() {
	yield takeLatest(GET_TODOS, getTodoList);
	yield takeLatest(CREATE_TODO, createTodo);
	yield takeEvery(DELETE_TODO, deleteTodo);
	yield takeEvery(COMPLETE_TODO, completeTodo);
	yield takeLatest(UPDATE_TODO, updateTodo);
}
