import {TodoDraft} from './todo/TodoDraft';

export interface Todo extends TodoDraft {
    readonly id: number;
    readonly createdAt: string;
}
