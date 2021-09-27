import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import PostTodoReducer from './PostTodoReducer';
import DeleteTodoReducer from './DeleteTodoReducer';
import UpdateTodoReducer from './UpdateReducer';
import GetTodoReducer from './GetTodoReducer';
import GetItemsReducer from './GetItemsReducer';
import PostItemsReducer from './PostItemsReducer';
import UpdateItemsReducer from './UpdateItemReducer';
import DeleteItemsReducer from './DeleteItemReducer';

const RootReducer = combineReducers({
  TodoReducer,
  PostTodoReducer,
  DeleteTodoReducer,
  UpdateTodoReducer,
  GetTodoReducer,
  GetItemsReducer,
  PostItemsReducer,
  UpdateItemsReducer,
  DeleteItemsReducer,
});

export default RootReducer;
