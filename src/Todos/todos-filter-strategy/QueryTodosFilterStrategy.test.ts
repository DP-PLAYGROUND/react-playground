import {QueryTodosFilterStrategy} from './QueryTodosFilterStrategy';
import {Todo} from '../Todo';

describe('QueryTodosFilterStrategy', () => {
    it('should filter todos', () => {
        const todos = [{ title: 'qwe' }, { title: 'asd' }, { title: 'zxq' }] as Todo[];

        expect(new QueryTodosFilterStrategy('query')
            .execute(todos))
            .toEqual([]);

        expect(new QueryTodosFilterStrategy('q')
            .execute(todos))
            .toEqual([{ title: 'qwe' }, { title: 'zxq' }]);

        expect(new QueryTodosFilterStrategy('qw')
            .execute(todos))
            .toEqual([{ title: 'qwe' }]);

        expect(new QueryTodosFilterStrategy('s')
            .execute(todos))
            .toEqual([{ title: 'asd' }]);
    });
})
