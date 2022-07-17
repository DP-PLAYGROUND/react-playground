import {TodosFilterStrategy} from '../TodosFilterStrategy';
import {Todo} from '../Todo';

export class ChainedTodosFilterStrategy implements TodosFilterStrategy {
    constructor(private readonly strategies: readonly TodosFilterStrategy[]) {}

    execute(todos: readonly Todo[]): readonly Todo[] {
        return this.strategies.reduce((acc, curr) => curr.execute(acc), todos)
    }
}
