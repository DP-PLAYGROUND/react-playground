import {createEntityAdapter, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store/reducer';
import {Todo} from './Todo';
import {TodoDraft} from './todo/TodoDraft';
import {TodosFilterStrategy} from './TodosFilterStrategy';

const todosAdapter = createEntityAdapter<Todo>({
    selectId: todo => todo.id
});

const initialState = todosAdapter.getInitialState();

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<TodoDraft>) => {
            todosAdapter.addOne(state, {
                ...action.payload,
                createdAt: new Date().toISOString(),
                id: state.ids.length
            })
        },
        updated: (state, action: PayloadAction<Readonly<{id: Todo['id'], changes: Partial<TodoDraft>}>>) => {
            todosAdapter.updateOne(state, action)
        },
        removed: (state, action: PayloadAction<Todo['id']>) => {
            todosAdapter.removeOne(state, action)
        }
    }
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
