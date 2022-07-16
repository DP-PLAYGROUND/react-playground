import {Todo, TodoDraft, TodoUpdateParams} from './Todo';
import {JSONPlaceholderProvider} from '../JSONPlaceholderProvider';

const provider = JSONPlaceholderProvider;

const path = 'todos';

const getAll = () => {
    return provider.get<readonly Todo[]>(path).then(res => res.data);
}

const create = (todo: TodoDraft) => {
    return provider.post<Todo>(path, todo).then(res => res.data);
}

const update = ({ id, changes}: TodoUpdateParams) => {
    return provider.patch<Todo>(`${path}/${id}`, changes).then(res => res.data);
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
