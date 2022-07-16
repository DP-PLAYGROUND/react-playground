export interface TodoDraft {
    readonly title: string;
    readonly completed: boolean;
}

export interface Todo extends TodoDraft {
    readonly id: number;
}

export interface TodoUpdateParams {
    readonly id: Todo['id'],
    readonly changes: Partial<TodoDraft>
}
