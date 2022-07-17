import {TodosFilterSortType} from './todos-filter-params/TodosFilterSortType';
import {TodosFilterStatusType} from './todos-filter-params/TodosFilterStatusType';

export interface TodosFilterParams {
    readonly query: string;
    readonly status: TodosFilterStatusType;
    readonly sort: TodosFilterSortType;
}
