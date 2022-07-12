import {FunctionComponent} from 'react';
import TodoForm from './TodoForm/TodoForm';
import {TodoDraft} from './TodoDraft';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectTodos, todosActions} from './todosSlice';
import TodoView from './TodoView/TodoView';

const Todos: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const todos = useAppSelector(selectTodos);

    const onCreate = (todo: TodoDraft) => {
        dispatch(todosActions.add({
            ...todo,
            id: new Date().getTime(),
            createdAt: new Date().toISOString(),
            completed: false
        }));
    }

    const onRemove = (id: number) => {
        dispatch(todosActions.remove(id))
    };

    return (
        <>
            <h1>Todos</h1>

            <section>
                <TodoForm onSubmit={onCreate}></TodoForm>
            </section>

            <section>
                {todos.map(todo => (
                    <section key={todo.id}>
                        <TodoView {...todo}/>
                        <button onClick={() => onRemove(todo.id)}>Remove</button>
                    </section>
                ))}
            </section>
        </>
    )
}

export default Todos
