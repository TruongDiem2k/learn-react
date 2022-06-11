import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO } from './constants';

export const setTodoInput = (data) => ({
    type: SET_TODO_INPUT,
    data,
});

export const addTodo = (data) => ({
    type: ADD_TODO,
    data,
});

export const removeTodo = (data) => ({
    type: REMOVE_TODO,
    data,
});
