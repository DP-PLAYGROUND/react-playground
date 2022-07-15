import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {Todo, TodoDraft} from '../api/Todos/Todo';
import {TodosApi} from '../api/Todos/TodosAPI';

interface State {
    readonly status: 'idle' | 'loading';
}

const todosAdapter = createEntityAdapter<Todo>({
    selectId: todo => todo.id
});

const initialState = todosAdapter.getInitialState<State>({
    status: 'idle'
});


export const loadTodos = createAsyncThunk('todos/load', () => {
    return TodosApi.getAll();
});

export const createTodo = createAsyncThunk('todos/create', (todo: TodoDraft) => {
    return TodosApi.create(todo);
});

export const updateTodo = createAsyncThunk('todos/update', ({id, todo}: {id: Todo['id'], todo: TodoDraft}) => {
    return TodosApi.update(id, todo);
});

export const removeTodo = createAsyncThunk('todos/remove', (id: Todo['id']) => {
    return TodosApi.remove(id);
});

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
});

export const { reducer: todosReducer, actions: todosActions } = slice;
