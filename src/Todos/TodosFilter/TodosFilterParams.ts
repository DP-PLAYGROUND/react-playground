import {TodosFilterSortType} from './TodosFilterSortType';
import {TodosFilterStatusType} from './TodosFilterStatusType';

export interface TodosFilterParams {
    readonly query: string;
    readonly status: TodosFilterStatusType;
    readonly sort: TodosFilterSortType;
}
