import {Todo} from '../Todo';
import {SortTodosFilterStrategy} from './SortTodosFilterStrategy';
import {TodosFilterSortType} from '../TodosFilter/params/TodosFilterSortType';

describe('SortTodosFilterStrategy', () => {
    it('should sort todos', () => {
        const todos = [
            {createdAt: '2022-07-16T09:26:36.185Z', title: 'b'},
            {createdAt: '2022-07-18T09:26:36.185Z', title: 'c'},
            {createdAt: '2022-07-17T09:26:36.185Z', title: 'a'},
        ] as Todo[];

        expect(new SortTodosFilterStrategy(TodosFilterSortType.newest)
            .execute(todos))
            .toEqual([
                {createdAt: '2022-07-18T09:26:36.185Z', title: 'c'},
                {createdAt: '2022-07-17T09:26:36.185Z', title: 'a'},
                {createdAt: '2022-07-16T09:26:36.185Z', title: 'b'},
            ]);

        expect(new SortTodosFilterStrategy(TodosFilterSortType.name)
            .execute(todos))
            .toEqual([
                {createdAt: '2022-07-17T09:26:36.185Z', title: 'a'},
                {createdAt: '2022-07-16T09:26:36.185Z', title: 'b'},
                {createdAt: '2022-07-18T09:26:36.185Z', title: 'c'},
            ]);
    });
})
