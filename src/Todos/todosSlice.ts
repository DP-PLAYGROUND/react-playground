import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/reducer';

export interface Todo {
    readonly id: number | string;
    readonly title: string;
    readonly description: string;
    readonly createdAt: string;
    readonly completed: boolean;
}

const initialState: readonly Todo[] = [];

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: (state, action) => {
            console.log(state);
            console.log(action);
        }
    }
});

export const { reducer: todosReducer, actions: todosActions } = slice;

export const selectTodos = (state: RootState) => state.todos;
