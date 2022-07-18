export enum TodosFilterSortType {
    newest = 'Newest',
    name = 'Name'
}

export const todosFilterSortTypes = Object.values(TodosFilterSortType);

export const isTodosFilterSortType = (value: any): value is TodosFilterSortType => {
    return todosFilterSortTypes.includes(value);
}
