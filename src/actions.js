export const GET_TODOS = "GET_TODOS";
export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const COMPLETE_TODO_SUCCESS = "COMPLETE_TODO_SUCCESS";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";

export const getTodos = () => ({ type: GET_TODOS });
export const createTodo = title => ({ type: CREATE_TODO, title });
export const deleteTodo = (id, navigate = false) => ({
	type: DELETE_TODO,
	id,
	navigate
});
export const completeTodo = (id, navigate = false) => ({
	type: COMPLETE_TODO,
	id,
	navigate
});
export const updateTodo = task => ({ type: UPDATE_TODO, task });
