import Todo from './todo_middleware';
import {applyMiddleware} from 'redux';

const MasterMiddleware = applyMiddleware(Todo);

export default MasterMiddleware;
