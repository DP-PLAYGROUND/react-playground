import {ChainedTodosFilterStrategy} from './ChainedTodosFilterStrategy';
import {QueryTodosFilterStrategy} from './QueryTodosFilterStrategy';
import {StatusTodosFilterStrategy} from './StatusTodosFilterStrategy';
import {TodosFilterStatusType} from '../TodosFilter/params/TodosFilterStatusType';
import {SortTodosFilterStrategy} from './SortTodosFilterStrategy';
import {TodosFilterSortType} from '../TodosFilter/params/TodosFilterSortType';
import {Todo} from '../Todo';
import SpyInstance = jest.SpyInstance;

describe('ChainedTodosFilterStrategy', () => {
    let chainedStrategy: ChainedTodosFilterStrategy;
    let executeSpies: SpyInstance<readonly Todo[], [todos: readonly Todo[]]>[];

    beforeEach(() => {
        const strategies = [
            new QueryTodosFilterStrategy(''),
            new StatusTodosFilterStrategy(TodosFilterStatusType.all),
            new SortTodosFilterStrategy(TodosFilterSortType.name)
        ];

        executeSpies = strategies.map(strategy => jest.spyOn(strategy, 'execute'))

        chainedStrategy = new ChainedTodosFilterStrategy(strategies);
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should execute strategies', () => {
        chainedStrategy.execute([]);

        executeSpies.forEach(spy => expect(spy).toHaveBeenCalled())
    });

    it('should follow execution order', () => {
        chainedStrategy.execute([]);

        executeSpies.reduce((acc, curr) => {
            const invocationCall = curr.mock.invocationCallOrder[0];
            expect(invocationCall).toBeGreaterThan(acc);
            return invocationCall;
        }, 0)
    });
})
