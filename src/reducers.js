import { combineReducers } from "redux";
import {
	GET_TODOS_SUCCESS,
	CREATE_TODO_SUCCESS,
	DELETE_TODO_SUCCESS,
	COMPLETE_TODO_SUCCESS
} from "./actions";

const initialState = {
	tasks: []
};

const todoReducer = (state = initialState, { type, tasks }) => {
	switch (type) {
		case GET_TODOS_SUCCESS:
		case CREATE_TODO_SUCCESS:
		case COMPLETE_TODO_SUCCESS:
		case DELETE_TODO_SUCCESS:
			return { ...state, tasks };
		default:
			return state;
	}
};
const reducers = combineReducers({
	todoReducer
});

export default reducers;
