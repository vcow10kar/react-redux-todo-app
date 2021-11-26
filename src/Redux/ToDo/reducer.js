import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

const initState = {
    todos: []
}

const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, payload]
            };
        }

        case TOGGLE_TODO: {
            return {
                ...state,
                todos: state.todos.map(item => (item.id === payload ? {...item, status: !item.status} : item))
            };
        }

        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(item => (item.id === payload ? false : true))
            };
        }

        case UPDATE_TODO: {
            return {
                ...state,
                todos: state.todos.map(item => (item.id === payload.id ? {...item, title: payload.title} : item))
            }
        }

        default: {
            return state;
        }
    }
}

export default reducer;