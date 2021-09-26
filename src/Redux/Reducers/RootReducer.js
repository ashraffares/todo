import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import PostTodoReducer from './PostTodoReducer';
import DeleteTodoReducer from './DeleteTodoReducer';

const RootReducer = combineReducers({
  TodoReducer,
  PostTodoReducer,
  DeleteTodoReducer,
});

export default RootReducer;
