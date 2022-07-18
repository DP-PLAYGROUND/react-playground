import {combineReducers} from 'redux';
import {todosReducer} from '../Todos/todosSlice';
import {todosFilterReducer} from '../Todos/TodosFilter/todosFilterSlice';

export const reducer = combineReducers({
    todos: todosReducer,
    todosFilter: todosFilterReducer
});

export type RootState = ReturnType<typeof reducer>;
