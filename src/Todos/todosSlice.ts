import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/reducer';

export interface TodoDraft {
    readonly title: string;
    readonly description: string;
}

export interface Todo extends TodoDraft {
    readonly id: number;
    readonly createdAt: string;
}

const initialState: readonly Todo[] = [];

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        added: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
        },
        removed: (state, action: PayloadAction<Todo['id']>) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
});

export const { reducer: todosReducer, actions: todosActions } = slice;

export const selectTodos = (state: RootState) => state.todos;
