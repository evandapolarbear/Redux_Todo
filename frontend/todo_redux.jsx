import React from 'react';
import ReactDOM from 'react-dom';
import {FetchTodos, CreateTodos } from './util/todo_api_util';
import configureStore from './store/store';
import {requestTodos, createTodo } from './actions/todo_actions';
import AllTodos from './reducers/selector';
import Root from './components/root';

window.allTodos = AllTodos;
window.fetch = FetchTodos;
window.create = CreateTodos;
window.store = configureStore;
window.requestTodos = requestTodos;
window.createTodo = createTodo;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("content");
    ReactDOM.render(<Root store={ configureStore }/>, root);

});
