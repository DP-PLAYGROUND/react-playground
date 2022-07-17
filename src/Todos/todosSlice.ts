import {createAsyncThunk, createEntityAdapter, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/reducer';
import {Todo} from './Todo';
import {TodoDraft} from './TodoDraft';
import {TodosFilterStrategy} from './TodosFilterStrategy';

const todosAdapter = createEntityAdapter<Todo>({
    selectId: todo => todo.id
});

const initialState = todosAdapter.getInitialState();

export const createTodo = createAsyncThunk(`todos/create`, (todo: TodoDraft) =>
    ({ ...todo, id: new Date().getTime() }));

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        updated: (state, action: PayloadAction<Readonly<{id: Todo['id'], changes: Partial<TodoDraft>}>>) => {
            todosAdapter.updateOne(state, action)
        },
        removed: (state, action: PayloadAction<Todo['id']>) => {
            todosAdapter.removeOne(state, action)
        }
    },
    extraReducers: builder => builder
        .addCase(createTodo.fulfilled, todosAdapter.addOne)
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
