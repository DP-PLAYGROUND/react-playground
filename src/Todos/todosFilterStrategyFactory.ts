import {TodosFilterParams} from './TodosFilterParams';
import {TodosFilterStrategy} from './TodosFilterStrategy';

export const todosFilterStrategyFactory = (params: TodosFilterParams): TodosFilterStrategy => {
    console.log(params);

    return {
        execute: (todos) => todos
    } as TodosFilterStrategy;
}
