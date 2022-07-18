import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store/reducer';
import {Todo} from './Todo';
import {TodoDraft} from './TodoDraft';
import {TodosFilterStrategy} from './TodosFilterStrategy';

const todosAdapter = createEntityAdapter<Todo>({
    selectId: todo => todo.id
});

const initialState = todosAdapter.getInitialState();

export const createTodo = createAsyncThunk<Todo, TodoDraft>(
    `todos/create`,
    draft => {
        const date = new Date();

        const id = date.getTime() + Math.round(performance.now());
        const createdAt = date.toISOString();

        return {...draft, id, createdAt}
    });

export const updateTodo = createAsyncThunk<{id: Todo['id'], changes: Partial<TodoDraft>}, {id: Todo['id'], changes: Partial<TodoDraft>}>(
    'todos/update',
    (params) => params
);

export const removeTodo = createAsyncThunk<Todo['id'], Todo['id']>(
    'todos/remove',
    id => id
)

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(createTodo.fulfilled, todosAdapter.addOne)
        .addCase(updateTodo.fulfilled, todosAdapter.updateOne)
        .addCase(removeTodo.fulfilled, todosAdapter.removeOne)
});

export const { reducer: todosReducer, actions: todosActions } = slice;

const todosSelectors = todosAdapter.getSelectors<RootState>(state => state.todos);

export const {
    selectAll: selectAllTodos,
} = todosSelectors;

export const selectFilteredTodos = createSelector(
    [
        selectAllTodos,
        (_state: RootState, filterStrategy: TodosFilterStrategy) => filterStrategy
    ],
    (todos, filterStrategy) => filterStrategy.execute(todos)
);
