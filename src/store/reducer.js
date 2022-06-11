import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO } from './constants';

const initState = {
    todoInput: '',
    todoList: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.data,
            };
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.data],
            };
        case REMOVE_TODO:
            const newTodoList = [...state.todoList];
            newTodoList.splice(action.data, 1);
            console.log(newTodoList);
            return {
                ...state,
                todoList: newTodoList,
            };
        default:
            throw new Error(`Invalid action ${action.type}`);
    }
};

export { initState, reducer };
