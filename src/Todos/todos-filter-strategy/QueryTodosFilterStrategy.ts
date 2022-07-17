import {TodosFilterStrategy} from '../TodosFilterStrategy';
import {Todo} from '../Todo';

export class QueryTodosFilterStrategy implements TodosFilterStrategy {
    constructor(private readonly query: string) {}

    execute(todos: readonly Todo[]): readonly Todo[] {
        return this.query ? todos.filter(todo => todo.title.includes(this.query)) : todos;
    }
}
