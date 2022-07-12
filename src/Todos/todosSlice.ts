import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/reducer';

export interface TodoDraft {
    readonly title: string;
    readonly description: string;
}

export interface Todo extends TodoDraft {
    readonly id: number;
    readonly createdAt: string;
    readonly editedAt?: string;
}

const initialState: readonly Todo[] = [];

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<TodoDraft>) => {
            return state.concat({
                ...action.payload,
                id: new Date().getTime(),
                createdAt: new Date().toISOString()
            });
        },
        remove: (state, action: PayloadAction<Todo['id']>) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        edit: (state, action: PayloadAction<{id: Todo['id'], todo: Partial<TodoDraft>}>) => {
            return state.map(todo => todo.id === action.payload.id ?
                { ...todo, ...action.payload.todo, editedAt: new Date().toISOString() } :
                todo);
        }
    }
});

export const { reducer: todosReducer, actions: todosActions } = slice;

export const selectTodos = (state: RootState) => state.todos;
