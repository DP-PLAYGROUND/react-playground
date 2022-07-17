import {Todo} from './Todo';

export interface TodosFilterStrategy {
    execute(todos: readonly Todo[]): readonly Todo[];
}
