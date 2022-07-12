import {FunctionComponent} from 'react';
import TodoForm from './TodoForm/TodoForm';
import {TodoDraft} from './TodoDraft';
import {useAppDispatch} from '../app/hooks';
import {todosActions} from './todosSlice';

const Todos: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const onCreate = (todo: TodoDraft) => {
        dispatch(todosActions.add({
            ...todo,
            id: new Date().getTime(),
            createdAt: new Date().toISOString(),
            completed: false
        }));
    }

    return (
        <>
            <h1>Todos</h1>

            <section>
                <TodoForm onSubmit={onCreate}></TodoForm>
            </section>
        </>
    )
}

export default Todos
