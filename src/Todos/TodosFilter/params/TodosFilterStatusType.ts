export enum TodosFilterStatusType {
    all = 'All',
    active = 'Active',
    completed = 'Completed'
}

export const todosFilterStatusTypes = Object.values(TodosFilterStatusType);

export const isTodosFilterStatusType = (value: any): value is TodosFilterStatusType => {
    return todosFilterStatusTypes.includes(value);
}
