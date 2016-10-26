import { REQUEST_TODOS,  RECEIVE_TODOS, CREATE_TODO, recieveTodo, recieveTodos } from '../actions/todo_actions';
import { FetchTodos, CreateTodos } from '../util/todo_api_util';

const TodoMiddleware = store => next => action => {
  switch (action.type) {
    case REQUEST_TODOS:
      let success = (data) =>  store.dispatch(recieveTodos(data));
      let error = (e) => console.log(e);
      FetchTodos(success, error);
      break; // TODO: test with return next(action)
    case CREATE_TODO:
      success = (data) => store.dispatch(recieveTodo(data));
      error = (e) => console.log(e);
      CreateTodos(action.todo, success, error);
      break;
    default:
      return next(action);
  }
};

export default TodoMiddleware;
