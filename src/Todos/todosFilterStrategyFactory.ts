import {TodosFilterParams} from './TodosFilter/TodosFilterParams';
import {TodosFilterStrategy} from './TodosFilterStrategy';
import {ChainedTodosFilterStrategy} from './todos-filter-strategy/ChainedTodosFilterStrategy';
import {QueryTodosFilterStrategy} from './todos-filter-strategy/QueryTodosFilterStrategy';
import {StatusTodosFilterStrategy} from './todos-filter-strategy/StatusTodosFilterStrategy';
import {SortTodosFilterStrategy} from './todos-filter-strategy/SortTodosFilterStrategy';

export const todosFilterStrategyFactory = ({query, status, sort}: TodosFilterParams): TodosFilterStrategy => {
    const strategies = [
        new QueryTodosFilterStrategy(query),
        new StatusTodosFilterStrategy(status),
        new SortTodosFilterStrategy(sort)
    ];

    return new ChainedTodosFilterStrategy(strategies);
}
