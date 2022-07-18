import {TodosFilterStrategy} from '../TodosFilterStrategy';
import {Todo} from '../Todo';
import {TodosFilterStatusType} from '../TodosFilter/params/TodosFilterStatusType';

export class StatusTodosFilterStrategy implements TodosFilterStrategy {
    constructor(private readonly status: TodosFilterStatusType) {}

    execute(todos: readonly Todo[]): readonly Todo[] {
        switch (this.status) {
            case TodosFilterStatusType.active:
                return todos.filter(todo => !todo.completed);
            case TodosFilterStatusType.completed:
                return todos.filter(todo => todo.completed);
        }

        return todos;
    }
}
