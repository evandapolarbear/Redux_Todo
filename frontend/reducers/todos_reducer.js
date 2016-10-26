import React from 'react';
import { RECEIVE_TODOS, REQUEST_TODOS, CREATE_TODO, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach((todo) => {newState[todo.id] = todo;});
      return newState;
    case RECEIVE_TODO:
        return merge({}, state, {[action.todo.id]: action.todo });
    default:
      return state;
  }
};

export default TodosReducer;
