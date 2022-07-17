import {TodoDraft} from './TodoDraft';

export interface Todo extends TodoDraft {
    readonly id: number;
}
