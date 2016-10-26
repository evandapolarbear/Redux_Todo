export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const CREATE_TODO = 'CREATE_TODO';


export const recieveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const requestTodos = () => ({
  type: REQUEST_TODOS
});

export const createTodo = todo => ({
  type: CREATE_TODO,
  todo
});

export const recieveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});
