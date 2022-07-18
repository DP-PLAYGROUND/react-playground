import {TodosFilterSortType} from './params/TodosFilterSortType';
import {TodosFilterStatusType} from './params/TodosFilterStatusType';

export interface TodosFilterParams {
    readonly query: string;
    readonly status: TodosFilterStatusType;
    readonly sort: TodosFilterSortType;
}
