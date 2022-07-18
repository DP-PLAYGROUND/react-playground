import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodosFilterParams} from './TodosFilterParams';
import {TodosFilterSortType} from './params/TodosFilterSortType';
import {TodosFilterStatusType} from './params/TodosFilterStatusType';
import {RootState} from '../../store/reducer';

const initialState: TodosFilterParams = {
    query: '',
    sort: TodosFilterSortType.newest,
    status: TodosFilterStatusType.all
}

const slice = createSlice({
    name: 'todosFilter',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Partial<TodosFilterParams>>) => ({...state, ...action.payload}),
        reset: () => initialState
    }
});

export const {reducer: todosFilterReducer, actions: todosFilterActions} = slice;

export const selectTodosFilterParams = (state: RootState) => state.todosFilter;
