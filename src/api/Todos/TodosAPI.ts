import {Todo, TodoDraft} from './Todo';
import {JSONPlaceholderProvider} from '../JSONPlaceholderProvider';

const path = 'todos';

const getAll = () => {
    return JSONPlaceholderProvider.get<readonly Todo[]>(path).then(res => res.data);
}

const create = (todo: TodoDraft) => {
    return JSONPlaceholderProvider.post<Todo>(path, todo).then(res => res.data);
}

const update = (id: Todo['id'], fields: Partial<TodoDraft>) => {
    return JSONPlaceholderProvider.patch<Todo>(`${path}/${id}`, fields).then(res => res.data);
}

export const TodosApi = {
    getAll,
    create,
    update
}
