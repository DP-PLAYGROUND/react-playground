import {TodosFilterStrategy} from '../TodosFilterStrategy';
import {Todo} from '../Todo';
import {TodosFilterSortType} from '../todos-filter-params/TodosFilterSortType';

export class SortTodosFilterStrategy implements TodosFilterStrategy {
    constructor(private readonly sort: TodosFilterSortType) {}

    execute(todos: readonly Todo[]): readonly Todo[] {
        switch (this.sort) {
            case TodosFilterSortType.name:
                return [...todos].sort((a, b) => a.title.localeCompare(b.title));
            case TodosFilterSortType.newest:
                return [...todos].sort((a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        return todos;
    }
}
