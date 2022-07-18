import {Todo} from '../Todo';
import {TodosFilterStatusType} from '../todos-filter-params/TodosFilterStatusType';
import {StatusTodosFilterStrategy} from './StatusTodosFilterStrategy';

describe('StatusTodosFilterStrategy', () => {
    it('should filter todos', () => {
        const todos = [{ completed: true }, { completed: false }] as Todo[];

        expect(new StatusTodosFilterStrategy(TodosFilterStatusType.all)
            .execute(todos))
            .toEqual(todos);

        expect(new StatusTodosFilterStrategy(TodosFilterStatusType.active)
            .execute(todos))
            .toEqual([{ completed: false }]);

        expect(new StatusTodosFilterStrategy(TodosFilterStatusType.completed)
            .execute(todos))
            .toEqual([{ completed: true }]);
    });
})
