import {combineReducers} from 'redux';
import {todosReducer} from '../Todos/todosSlice';
import {todosFilterReducer} from '../Todos/TodosFilter/todosFilterSlice';
import {usersReducer} from '../Users/usersSlice';

export const reducer = combineReducers({
    todos: todosReducer,
    todosFilter: todosFilterReducer,
    users: usersReducer,
});

export type RootState = ReturnType<typeof reducer>;
