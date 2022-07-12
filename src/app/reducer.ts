import {combineReducers} from 'redux';
import {todosReducer} from '../Todos/todosSlice';

export const reducer = combineReducers({
    todos: todosReducer
});

export type RootState = ReturnType<typeof reducer>;
