import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import PostTodoReducer from './PostTodoReducer';
import DeleteTodoReducer from './DeleteTodoReducer';
import UpdateTodoReducer from './UpdateReducer';
import GetTodoReducer from './GetTodoReducer';

const RootReducer = combineReducers({
  TodoReducer,
  PostTodoReducer,
  DeleteTodoReducer,
  UpdateTodoReducer,
  GetTodoReducer,
});

export default RootReducer;
