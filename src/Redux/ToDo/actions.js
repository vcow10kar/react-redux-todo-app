import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";
import {v4 as uuid} from 'uuid';

function addToDo(payload) {
    return {
        type: ADD_TODO,
        payload: {
            id: uuid(),
            title: payload,
            status: false
        }
    };
}

function toggleToDo(payload) {
    return {
        type: TOGGLE_TODO,
        payload: payload
    };
}

function deleteToDo(payload) {
    return {
        type: DELETE_TODO,
        payload: payload
    };
}

function updateToDo(payload) {
    return {
        type: UPDATE_TODO,
        payload: payload
    };
}


export {addToDo, toggleToDo, deleteToDo, updateToDo};