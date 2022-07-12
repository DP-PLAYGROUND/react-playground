import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/reducer';

export interface Todo {
    readonly id: number;
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
        add: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
        },
        remove: (state, action: PayloadAction<Todo['id']>) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
});

export const { reducer: todosReducer, actions: todosActions } = slice;

export const selectTodos = (state: RootState) => state.todos;
