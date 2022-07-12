import {Todo} from './todosSlice';

export type TodoDraft = Pick<Todo, 'title' | 'description'>;
