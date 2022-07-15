import {Todo, TodoDraft} from './Todo';
import {JSONPlaceholderProvider} from '../JSONPlaceholderProvider';

const provider = JSONPlaceholderProvider;

const path = 'todos';

const getAll = () => {
    return provider.get<readonly Todo[]>(path).then(res => res.data);
}

const create = (todo: TodoDraft) => {
    return provider.post<Todo>(path, todo).then(res => res.data);
}

const update = (id: Todo['id'], fields: Partial<TodoDraft>) => {
    return provider.patch<Todo>(`${path}/${id}`, fields).then(res => res.data);
}

const remove = (id: Todo['id']) => {
    return provider.delete(`${path}/${id}`).then(res => res.data);
}

export const TodosApi = {
    getAll,
    create,
    update,
    remove
}
