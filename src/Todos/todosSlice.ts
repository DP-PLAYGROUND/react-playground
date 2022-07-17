import {createEntityAdapter, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/reducer';
import {TodosFilterParams} from './TodosFilter/TodosFilterParams';
import {TodosFilterStatusType} from './TodosFilter/TodosFilterStatusType';
import {TodosFilterSortType} from './TodosFilter/TodosFilterSortType';

export interface TodoDraft {
    readonly title: string;
    readonly completed: boolean;
}

export interface Todo extends TodoDraft {
    readonly id: number;
}

const todosAdapter = createEntityAdapter<Todo>({
    selectId: todo => todo.id,
    sortComparer: (a, b) => b.id - a.id
});

const initialState = todosAdapter.getInitialState();

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<TodoDraft>) => {
            todosAdapter.addOne(state, {...action.payload, id: new Date().getTime()})
        },
        update: (state, action: PayloadAction<Readonly<{id: Todo['id'], changes: Partial<TodoDraft>}>>) => {
            todosAdapter.updateOne(state, action)
        },
        remove: (state, action: PayloadAction<Todo['id']>) => {
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
        (_state: RootState, filterParams: TodosFilterParams) => filterParams
    ],
    (todos, filterParams) => {
        const filteredTodos = todos
            .filter(todo => todo.title.includes(filterParams.query))
            .filter(todo => {
                switch (filterParams.status) {
                    case TodosFilterStatusType.active:
                        return !todo.completed;
                    case TodosFilterStatusType.completed:
                        return todo.completed
                }

                return true
            });

        return filterParams.sort === TodosFilterSortType.name ?
            filteredTodos.sort((a, b) => a.title.localeCompare(b.title)) :
            filteredTodos;
    }
);
