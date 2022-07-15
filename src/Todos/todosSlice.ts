import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {Todo, TodoDraft} from '../api/Todos/Todo';
import {TodosApi} from '../api/Todos/TodosAPI';

const todosAdapter = createEntityAdapter<Todo>({
    selectId: todo => todo.id
});

const initialState = todosAdapter.getInitialState();

export const loadTodos = createAsyncThunk('todos/load', () => {
    return TodosApi.getAll();
});

export const createTodo = createAsyncThunk('todos/create', (todo: TodoDraft) => {
    return TodosApi.create(todo);
});

export const updateTodo = createAsyncThunk('todos/update', (params: Parameters<typeof TodosApi.update>) => {
    return TodosApi.update(...params);
});

export const removeTodo = createAsyncThunk('todos/remove', (id: Todo['id']) => {
    return TodosApi.remove(id).then(() => id);
});

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadTodos.fulfilled, todosAdapter.setAll)
        .addCase(createTodo.fulfilled, todosAdapter.addOne)
        .addCase(updateTodo.fulfilled, todosAdapter.setOne)
        .addCase(removeTodo.fulfilled, todosAdapter.removeOne)
});

export const { reducer: todosReducer, actions: todosActions } = slice;
